# Image Upload to Google Cloud Storage

This project allows users to upload images and store them in Google Cloud Storage. The images can be accessed via a public URL.

## Features

- Uploads images to Google Cloud Storage (GCS)
- Provides a public URL for each uploaded image
- Sends SMS notifications to the admin upon successful upload

## Installation

### Prerequisites
- Node.js v14+ 
- Google Cloud account and project with GCS set up
- Google Cloud service account key file (`mykey.json`)

### Configuration
1. Copy the .env.example file to .env:
   ```bash
    cp .env.example .env
   ```
2. Open the .env file and fill in the required values

### Steps to Install
1. Clone the repository:
   ```bash
   git clone https://github.com/paularinzee/nodejs-image-uploader.git

   ```

2. Install dependencies
   ```bash
   cd image-upload-gcs
    npm install
   ```
3. To run the project locally
   ```bash
   npm start

   ```

### Upload an Image
Send a POST request to /upload with the following form-data:
- image: (File) The image you want to upload
- number: (String) A registration number associated with the image

Example using Postman:
- Method: POST
- URL: http://localhost:3000/upload
- Body: Form-data with image and number fields
