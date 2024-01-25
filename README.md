# PIX.LY

## About:
- Pix.ly includes a React frontend, Python/Flask backend, and PostgreSQL database with photos being stored on AWS S3.
- To see a demo of Pix.ly visit:

## Features:
- Features include uploading a .jpeg file, searching for images based on their extracted EXIF data, and making simple photo edits like hanging a photo from black to white.
- Future features include rotating photos, applying filters to images, image resizing, etc.
- This application currently has not tests.

## Instructions:
- Clone the repository
- connect your S3 bucket to the backend with an AWS access key and secret key. Keep these in a .env file
- run the front-end with:
    install the dependencies with `npm install`
    then `npm start`
- run the back-end with:
    create your virtual environment with `python3 -m venv venv`
    activate the virtual environment with `venv source bin activate`
    install the dependencies with `pip3 install -r requirements.txt`
    run server with `flask run`
-