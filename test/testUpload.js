const storage = require("./config/config");
const fs = require("fs");
const bucket = storage.bucket("mrp-qrcode-generator");

async function testUpload() {
  try {
    const fileName = "test-upload.txt";
    const fileContent = Buffer.from("This is a test upload.");

    const file = bucket.file(fileName);

    await file.save(fileContent, {
      metadata: { contentType: "text/plain" },
    });

    console.log(`File uploaded successfully: ${fileName}`);
  } catch (err) {
    console.error("Upload test failed:", err);
  }
}

testUpload();
