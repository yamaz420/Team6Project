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

from sanic import Sanic, response
from randomforest import train_model, predict
from sanic.exceptions import NotFound
app = Sanic(__name__)
train_model()

@app.post('/api/predict')
async def predict_results(req):
  values = req.json
  prediction = predict(values['Level'])
  return response.json(prediction)

app.static('/', './dist')

@app.exception(NotFound)
async def ignore_404s():
  return await response.file('./dist/index.html')

if __name__ == "__main__":
  app.run(port=5500)  

