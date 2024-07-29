import { Kafka } from "kafkajs";

const kafkaBroker = process.env.KAFKA_BROKER;

const kafka = new Kafka({
  clientId: "financial-app",
  brokers: [kafkaBroker],
});

const producer = kafka.producer();

export const runProducer = async (event) => {
  await producer.connect();
  await producer.send({
    topic: "pagos",
    messages: [{ value: JSON.stringify(event) }],
  });
  await producer.disconnect();
};
