from fastapi import FastAPI
from fastapi.responses import JSONResponse
from google.oauth2.credentials import Credentials
import uvicorn
from typing import Union
from dotenv import load_dotenv
from services.gcal.upload import create_event_times, createEvent, createOrClearCalender
from services.llm.gemini import time_per_course
from services.llm.models import QueryBody
from googleapiclient.discovery import build

load_dotenv()

app = FastAPI()

@app.get("/")
def read_root():
   return {"Welcome to": "My first FastAPI depolyment"}

@app.post("/api/generate")
def generate(query: QueryBody):
   LLM_response = time_per_course(query.data)
   scheduled_data = LLM_response.dict()

   # Create Credentials object using the access token
   creds = Credentials(token=query.access_token)

   # Build the Google Calendar service
   service = build('calendar', 'v3', credentials=creds)
   calendarId = createOrClearCalender(service)

   for course in scheduled_data:
      for assignment in course["data"]:
         event_times = create_event_times(assignment)

         createEvent(service, calendarId, {
            "summary": assignment["assignmentName"],
            "description": course["courseName"],
            "start": {
               "datetime": event_times["start"]["datetime"]
            },
            "end": {
               "datetime": event_times["end"]["datetime"]
            }
         })

   return {
      "status_code": 200
   }

if __name__ == "__main__":
   uvicorn.run(app, host="0.0.0.0", port=8080)