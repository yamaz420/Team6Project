import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
import sqlite3

regressor = RandomForestRegressor(n_estimators = 12, random_state = 0)

def train_model():
  con = sqlite3.connect('dataset.db')
  dataset = pd.read_sql_query('SELECT * FROM dataset', con)
  
  X = dataset.iloc[:, 1:-1].values
  y = dataset.iloc[:, -1].values

  regressor.fit(X, y)


def predict(Level):
  prediction = regressor.predict([[Level]])

  print(prediction)

# kalla på båda funktionerna train_model() och predict():
train_model()
predict(Level=1)  
