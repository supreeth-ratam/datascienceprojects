from fastapi import FastAPI
import numpy as np
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
import joblib
import json

app = FastAPI()

class model_input(BaseModel):
    MedInc : float
    HouseAge : float
    AveRooms : float
    AveBedrms : float
    Population : float
    AveOccup : float
    Latitude: float
    Longitude: float

price_predictor = joblib.load('joblib.pkl')

@app.post('/priceprediction')
def price_pred(input_parameters:model_input):
    input_data = input_parameters.json()
    input_dict = json.loads(input_data)

    income = input_dict['MedInc']
    age = input_dict['HouseAge']
    avgrooms = input_dict['AveRooms']
    bedrooms = input_dict['AveBedrms']
    popl = input_dict['Population']
    occp = input_dict['AveOccup']
    lat = input_dict['Latitude']
    longt = input_dict['Longitude']

    input_list = np.asarray([income,age,avgrooms,bedrooms,popl,occp,lat,longt]).reshape(1,-1)

    prediction = price_predictor(input_list)

    return JSONResponse(content=jsonable_encoder(prediction))



