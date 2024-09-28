import os
from typing import Union
from fastapi import FastAPI
from fastapi.responses import JSONResponse
import uvicorn
from typing import Union

from dotenv import load_dotenv

from services.llm.gemini import make_llm_request, time_per_course
from services.llm.models import Course

load_dotenv()

app = FastAPI()

@app.get("/")
def read_root():
   return {"Welcome to": "My first FastAPI depolyment"}

@app.post("/api/generate")
def generate(query: list[Course]):
   resp = time_per_course(query)
   return resp.dict()


if __name__ == "__main__":
   uvicorn.run(app, host="0.0.0.0", port=8080)