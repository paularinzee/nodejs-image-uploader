const util = require('util')
const gcs = require('../config/config')

const bucket = gcs.bucket('mrp-qrcode-generator')

const { format } = util

/**
 *
 * @param { File } object file object that will be uploaded
 * @description - This function does the following
 * - It uploads a file to the image bucket on Google Cloud
 * - It accepts an object as an argument with the
 *   "originalname" and "buffer" as keys
 */

const sendImageToGCS = (file) => new Promise((resolve, reject) => {

  const { originalname, buffer, mimtype } = file;

  if (!buffer || buffer.length === 0) {
    return reject("File buffer is empty or invalid");
  }

  const sanitizedImageName = originalname.replace(/\s/g, "_"); // Sanitize file name
  const imageName = `${Date.now()}-${sanitizedImageName}`;

  const blob = bucket.file(imageName);

  const stream = blob.createWriteStream({
    metadata: {
      contentType: 'mimetype',
    },
  });

  stream.on('finish', () => {
    const publicUrl = format(
      `https://storage.googleapis.com/${bucket.name}/${blob.name}`
    )
    resolve(publicUrl)
  })
  .on('error', (err) => {
    console.error("Error during upload:", err); // Logs the actual error
    reject(`Unable to upload image, something went wrong`)
  })
  .end(buffer)

})

module.exports = sendImageToGCS