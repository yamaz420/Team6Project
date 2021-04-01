# py -m venv venv
# venv/Scripts/activate.bat
# py -m pip install sanic databases[sqlite]

#=====================================
# __Lead Authors__:
# @Author: Haris Nezirevic
# @Author: Petra Winter
#
# __Assisting Authors__:
# @Author: Erik Johnsson
#=====================================

import numpy as np 
import pandas as pd
import matplotlib as plt
from sklearn.ensemble import RandomForestRegressor

regressor = RandomForestRegressor(n_estimators = 12, random_state = 0)

def train_model():
    progs = pd.DataFrame(
        [
        ['Action',1,673.50],
        ['Sports',2,324.80],
        ['Shooter',3,462.80],
        ['Roleplaying',4,305.72],
        ['Platform',5,120.69],
        ['Misc',6,238.05],
        ['Racing',7,123.69],
        ['Fighting',8,82.08],
        ['Simulation',9,71.04],
        ['Puzzle',10,21.24],
        ['Adventure',11,61.05],
        ['Strategy',12,35.90]
    ],
    index=["Action", "Sports", "Shooter", "Role-Playing", "Platform", "Misc", "Racing", "Fighting", "Simulation", "Puzzle", "Adventure", "Strategy"],
    columns=['Genre','Level','GLSales'])

    X = progs.iloc[:, 1:-1].values
    y = progs.iloc[:, -1].values

    regressor.fit(X, y)

def predict(Level):

    prediction = regressor.predict([[Level]])

    print(prediction)

# kalla på båda funktionerna train_model() och predict():
train_model()
predict(Level=6) # level 6 = Misc