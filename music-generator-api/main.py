from bottle import Bottle, run

app = Bottle()

@app.route('/hello')
def hello():
    return "Hello World!"

if __name__ == '__main__':
    # load models 
    
    port = int(os.environ.get('PORT', 8080))
    run(host='0.0.0.0', port=port, debug=True)