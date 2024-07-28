import { Kafka } from 'kafkajs';
import { saveEvent } from '../db/mongo.js';

const kafkaBroker = process.env.KAFKA_BROKER;

const kafka = new Kafka({
  clientId: 'financial-app',
  brokers: [kafkaBroker]
});

const consumer = kafka.consumer({ groupId: 'financial-group' });

export const runConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'pagos', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const event = JSON.parse(message.value.toString());
      console.log(`Received event: ${event}`);
      await saveEvent(event);
    },
  });
};
