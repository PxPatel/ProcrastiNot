import os
from datetime import datetime
import instructor
import google.generativeai as genai
from pydantic import BaseModel
from dotenv import load_dotenv

import urllib.parse as parse
import urllib.request as request
import urllib.error as error

from .models import AssignmentTimes, Course, LLMResponse, User

load_dotenv()

genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))

client = instructor.from_gemini(
    client=genai.GenerativeModel(
        model_name="models/gemini-1.5-flash-latest",
    ),
    mode=instructor.Mode.GEMINI_JSON,
)

def make_llm_request(prompt, response_model=User) -> BaseModel:
    messages = [{
        'role': 'system',
        'content': '''You are a Assignment Schedule Assistant tasked with helping the user begin their assignments on time. Analyze the user provided course names and corresponding assignments (with due dates) and determine a length of time (in minutes) the assignment will take to complete. Factor in and based on the course names determine the length of time needed to complete the given assingment in minutes and return it in valid JSON. 
        You should consider the weight of the assignment when calculating duration:
            - Homeworks take less time than studying for Midterms or Exams
            - STEM class assignments usually take longer than liberal arts
            - Essays and projects take a long time

        *MOST IMPORTANT: DO NOT SCHEDULE ASSIGNMENTS FOR THE SAME DATE* 
        Try to stagger the times as well if you can (must be between 10am-7pm)
        
        Example Input: 
            {'currDate': "August 29, 2024",
            'currTime': "2:02PM",
            [Course(courseName='Principles of Operating Systems', assignments=[Assignment(assignmentName='HW01', dueDate='Sept 05'), Assignment(assignmentName='HW02', dueDate='Oct 05')]), Course(courseName='Financial Markets and Systems', assignments=[Assignment(assignmentName='HW01', dueDate='Sept 15'), Assignment(assignmentName='HW02', dueDate='Oct 15'), Assignment(assignmentName='Midterm', dueDate='Nov 01')])]
            }

        Example Output: [
            {
                "courseName": "Principles of Operating Systems",
                "data": [
                    {"assignmentName": "HW01", "duration": 60, "suggestedStartDate": "2024-10-05", "suggestedStartTime": "9:00"},
                    {"assignmentName": "HW02", "duration": 60, "suggestedStartDate": "2024-11-05", "suggestedStartTime": "10:00"}
                ]

            },
            {
                "courseName": "Financial Markets and Systems",
                "data": [
                    {"assignmentName": "HW01", "duration": 60, "suggestedStartDate": "2024-10-15", "suggestedStartTime": "12:00"},
                    {"assignmentName": "HW02", "duration": 60, "suggestedStartDate": "2024-11-15", "suggestedStartTime": "1:00"},
                    {"assignmentName": "Midterm", "duration": 120, "suggestedStartDate": "2024-12-01", "suggestedStartTime": "2:00"}
                ]
            }
        ]
        '''
    }]
    messages.append(
        {
            'role': 'user',
            'content': prompt
        }
    )
    resp = client.chat.completions.create(
        messages=messages,
        response_model=response_model,
    )
    return resp


def time_per_course(courses: list[Course]) -> list[AssignmentTimes]:
    prompt = f"{{'currDate': '{datetime.now().strftime('%B %d, %Y')}', 'currTime': '{datetime.now().strftime('%I:%M %p')}', 'courses': {courses}}}"
    return make_llm_request(prompt, LLMResponse)