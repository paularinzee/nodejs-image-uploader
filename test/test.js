const storage = require("./config/config"); // Path to your config file
const { format } = require("util");

async function listBuckets() {
  try {
    const [buckets] = await storage.getBuckets();
    console.log("Buckets:");
    buckets.forEach((bucket) => console.log(bucket.name));
  } catch (err) {
    console.error("Error listing buckets:", err);
  }
}

listBuckets();
