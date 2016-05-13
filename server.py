from flask import Flask
from flask import request
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route('/sample', methods=['GET'])
def pulse():
    # here we want to get the value of user (i.e. ?user=some-value)

    sample = request.args.get('sample')
    print 'here is the sample!: ',sample
    return 'here is the sample!:{} '.format(sample)


if __name__ == "__main__":
    app.run()


