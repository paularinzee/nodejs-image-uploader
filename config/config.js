require('dotenv').config();
const { Storage } = require("@google-cloud/storage");
const path = require('path')

const GCP_KEY = path.join(__dirname, '../mykey.json')

// const { Storage } = GCS

const storage = new Storage({
  keyFilename: GCP_KEY,
  projectId: process.env.PROJECTID
})

// console.log("GCP Key File Path:", GCP_KEY);
// console.log("Google Cloud Project ID:", process.env.PROJECTID);

module.exports = storage