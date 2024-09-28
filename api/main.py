import os
from typing import Union
from fastapi import FastAPI
from fastapi.responses import JSONResponse
import uvicorn
from typing import Union

from dotenv import load_dotenv
from mangum import Mangum

load_dotenv()

app = FastAPI()
handler = Mangum(app)

@app.get("/")
def read_root():
   return {"Welcome to": "My first FastAPI depolyment"}

@app.get("/api/generate")
def generate():
   return 


if __name__ == "__main__":
   uvicorn.run(app, host="0.0.0.0", port=8080)