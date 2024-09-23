from flask import Flask, render_template
import db

app = Flask("OffLeash")

@app.route("/")
def index():
    return render_template("main.html")

@app.route("/profile")
def user():
    return render_template("profile.html")

@app.route("/board")
def board():
    return render_template("board.html")

@app.route("/about")
def about():
    return render_template("about.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)