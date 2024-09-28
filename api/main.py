import os
from typing import Union
from fastapi import FastAPI
from fastapi.responses import JSONResponse
import uvicorn
from typing import Union

from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

@app.get("/")
def read_root():
   return {"Welcome to": "My first FastAPI depolyment using Docker image"}

@app.get("/get_api_key") # only for testing
def get_api_key():
    return JSONResponse({'api_key': os.getenv("GEMINI_API_KEY")})

@app.get("/{text}")
def read_item(text: str):
   return JSONResponse({"result": text})




if __name__ == "__main__":
   uvicorn.run(app, host="0.0.0.0", port=8080)