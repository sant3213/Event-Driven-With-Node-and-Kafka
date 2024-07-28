import { MongoClient } from 'mongodb';

const mongoUrl = process.env.MONGO_URL;
let db;

const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

export async function connectDb() {
  if (!db) {
    await client.connect();
    console.log("Connected successfully to MongoDB server");
    db = client.db();
  }
  return db;
}

export async function saveEvent(event) {
  const db = await connectDb();
  const collection = db.collection('transactions');
  await collection.insertOne(event);
  console.log("Event saved to MongoDB");
}