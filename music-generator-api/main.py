import os
from LanguageGenerationLSTM import LanguageGenerationLSTM
from bottle import Bottle, run, response
import bottle

rockModel = LanguageGenerationLSTM("./pickles/hackathon-model-rock", "./data/Rock")
print("----- ROCK MODEL LOADED -----")
popModel = LanguageGenerationLSTM("./pickles/hackathon-model-pop", "./data/Pop")
print("----- POP MODEL LOADED -----")
countryModel = LanguageGenerationLSTM("./pickles/hackathon-model-country", "./data/Country")
print("----- COUNTRY MODEL LOADED -----")
metalModel = LanguageGenerationLSTM("./pickles/hackathon-model-metal", "./data/Metal")
print("----- METAL MODEL LOADED -----")

app = Bottle()

@app.route('/rock')
def getRockSong():
    song = rockModel.createSong()
    return {"song": song, "genre": "Rock"}

@app.route('/metal')
def getMetalSong():
    song = metalModel.createSong()
    return {"song": song, "genre": "Metal"}

@app.route('/country')
def getCountrySong():
    song = countryModel.createSong()
    return {"song": song, "genre": "Country"}

@app.route('/pop')
def getPopSong():
    song = popModel.createSong()
    return {"song": song, "genre": "Pop"}


class EnableCors(object):
    name = 'enable_cors'
    api = 2

    def apply(self, fn, context):
        def _enable_cors(*args, **kwargs):
            # set CORS headers
            response.headers['Access-Control-Allow-Origin'] = '*'
            response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, OPTIONS'
            response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'

            if bottle.request.method != 'OPTIONS':
                # actual request; reply with the actual response
                return fn(*args, **kwargs)

        return _enable_cors


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    print("----- STARTING SERVER ON PORT 5000 -----")
    app.install(EnableCors())
    app.run(host='0.0.0.0', port=port, debug=True)
