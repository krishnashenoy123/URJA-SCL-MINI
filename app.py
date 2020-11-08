from flask import Flask, url_for
from flask import render_template, request

app = Flask(__name__)

@app.route('/Hi page')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.debug = True
    app.run()
    app.run(debug = True)

