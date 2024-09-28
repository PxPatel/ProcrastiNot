from typing import Dict, List, Union
from pydantic import BaseModel

"""
Responses
---------
"""
class User(BaseModel):
    name: str
    age: int

class AssignmentTimes(BaseModel):
    assignmentName: str
    duration: int
    suggestedStartDate: str
    suggestedStartTime: str

class CourseData(BaseModel):
    courseName: str
    data: List[AssignmentTimes]

class LLMResponse(BaseModel):
    response: List[CourseData]


"""
Payloads
---------
"""
class Query(BaseModel):
    query: str

class Assignment(BaseModel):
    assignmentName: str
    dueDate: str

class Course(BaseModel):
    courseName: str
    assignments: list[Assignment]

class QueryBody(BaseModel):
    data: list[Course]
    access_token: str
