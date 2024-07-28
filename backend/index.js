import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { runConsumer } from './src/consumers/transactionConsumer.js';
import { runProducer } from './src/producers/transactionProducer.js';

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Financial Monitoring System Backend');
});

app.get('/test-producer', async (req, res) => {
  try {
    await runProducer();
    res.send('Produced a message to Kafka successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to produce a message to Kafka.');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  runProducer().catch(console.error);
  runConsumer().catch(console.error);
});
