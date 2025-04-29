const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 5000; // আপনি পোর্ট পরিবর্তন করতে পারেন

// MongoDB URI
const uri = "mongodb+srv://myUser:myPassword@cluster0.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

app.get("/users", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("ecommerce");
    const users = db.collection("users");

    // MongoDB থেকে ইউজার ডেটা ফেচ করা
    const userList = await users.find().toArray();

    res.json(userList); // ফ্রন্টএন্ডে JSON আকারে ইউজার ডেটা পাঠানো
  } catch (error) {
    res.status(500).send("Error fetching users: " + error.message);
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
