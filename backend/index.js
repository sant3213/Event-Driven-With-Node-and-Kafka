import express from "express";
import cors from "cors";
import { runConsumer } from "./src/consumers/transactionConsumer.js";
import { runProducer } from "./src/producers/transactionProducer.js";
import { saveEvent } from "./src/db/mongo.js";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Financial Monitoring System Backend");
});

app.post("/data", async (req, res) => {
  const { id, amount, currency } = req.body;
  const event = { id, amount, currency, timestamp: new Date() };
  try {
    await runProducer(event);
    await saveEvent(event);
    res.status(200).send("Data processed successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing data");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  runConsumer().catch(console.error);
});