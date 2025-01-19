require('dotenv').config();
const GCS = require('@google-cloud/storage')
const path = require('path')

const GCP_KEY = path.join(__dirname, './mykey.json')

const { Storage } = GCS

const storage = new Storage({
  keyFilename: GCP_KEY,
  projectId: process.env.PROJECTID
})

module.exports = storage