
from flask import Flask, request, jsonify

app = Flask(__name__)

# Function to generate rhymes (basic reverse transformation)
def get_rhyme(original_text):
    return original_text[::-1]

# Route to handle POST requests for rhyming headlines
@app.route('/rhyme', methods=['POST'])
def rhyme_headline():
    # Receive the headline from the extension
    headline = request.json.get('headline')

    # Generate the rhyme
    rhymed_headline = get_rhyme(headline)

    # Return the rhymed headline
    print("Hello World")
    return jsonify({'rhymed_headline': rhymed_headline})

if __name__ == '__main__':
    app.run(port=5000)