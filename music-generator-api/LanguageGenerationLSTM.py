import tensorflow
import random
from keras.preprocessing.text import Tokenizer
# from keras.utils import to_categorical
# from tensorflow.keras.models import Sequential
# from tensorflow.keras.layers import Dense
# from tensorflow.keras.layers import LSTM
# from tensorflow.keras.layers import Embedding
# from tensorflow.keras.utils import to_categorical
# from  tensorflow.keras.preprocessing import text_dataset_from_directory
import numpy
from keras.preprocessing.sequence import pad_sequences
import os
import numpy
from keras.preprocessing.sequence import pad_sequences

class LanguageGenerationLSTM:
    def __init__(self, pickle_file_path, songs_path) -> None:
        self.model = tensorflow.keras.models.load_model(pickle_file_path)
        self.songs_path = songs_path
        self.songs = []
        self.tokenizer = Tokenizer()
        self.max_length = 4
        self.collectSongs()
        self.fitTokenizer()

    def importData(self, directory: str) -> list:
        with open(directory) as f:
            return f.read()

    def getAllFilesInFolder(self, dir: str) -> list:
        return os.listdir(dir)

    def collectSongs(self):
        for file in self.getAllFilesInFolder(self.songs_path):
            filePath = "{}/{}".format(self.songs_path, file)
            if "DS_Store" not in filePath:
                self.songs.append(self.importData(filePath))

    def fitTokenizer(self):
        # integer encode text
        self.tokenizer.fit_on_texts(self.songs)
        vocab_size = len(self.tokenizer.word_index) + 1
        print('Vocabulary Size: %d' % vocab_size)

    
    def createSong(self) -> str:
        song = ""
        for i in range(10):
            song += self.generate_seq(self.model, self.tokenizer, self.max_length-1, self.getSentanceStarter(3, self.songs), 10) + "\n"
        return song


    def getSentanceStarter(self, sentanceStarterLenth, songs):
        randomSongUpperBound = len(songs)
        #
        randomSongIndex = random.randint(0, randomSongUpperBound-1)
        randomSong = songs[randomSongIndex]
        splitSong = randomSong.split("\n")
        randomLineIndex = random.randint(0, len(splitSong)-1)
        line = splitSong[randomLineIndex]
        splitLine = line.split(" ")
        joinedSelection = " ".join(splitLine[0:sentanceStarterLenth])
        return joinedSelection


        # generate a sequence from a language model
    def generate_seq(self, model, tokenizer, max_length, seed_text, n_words):
        in_text = seed_text
        # generate a fixed number of words
        for _ in range(n_words):
            # encode the text as integer
            encoded = tokenizer.texts_to_sequences([in_text])[0]
            # pre-pad sequences to a fixed length
            encoded = pad_sequences([encoded], maxlen=max_length, padding='pre')
            # predict probabilities for each word
            yhat = numpy.argmax(model.predict(encoded), axis=-1)
            # map predicted word index to word
            out_word = ''
            for word, index in tokenizer.word_index.items():
                if index == yhat:
                    out_word = word
                    break
            # append to input
            in_text += ' ' + out_word
        return in_text
