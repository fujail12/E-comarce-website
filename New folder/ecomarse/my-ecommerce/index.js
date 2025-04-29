const { MongoClient } = require("mongodb");

// MongoDB URI (আপনার Atlas থেকে কপি করা URI ব্যবহার করুন)
const uri = "mongodb+srv://fujailakanda8655:AdCAPzbM4C8IXt7G@cluster0.vdwdbjg.mongodb.net/";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("ecommerce");
    const users = db.collection("users");

    // ডেটা ইনসার্ট করা
    await users.insertOne({ name: "Rahim", email: "rahim@example.com" });

    // ডেটা খুঁজে দেখা
    const user = await users.find().toArray();
    console.log(user);

  } finally {
    await client.close();
  }
}

run().catch(console.error);
