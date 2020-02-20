from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/game')
def game():
    return render_template('game.html')


@app.route('/loss')
def loss():
    return render_template('/game over.html')


if __name__ == '__main__':
    app.run(debug=True)