﻿# Event-Driven-With-Node-and-Kafka

## Required Commands

### Project Initialization
```bash 
npm init -y
```
```bash
 npm install kafkajs express dotenv mongodb
```
```bash
docker-compose build
```
```bash
 docker-compose up
```

### Monitoring Commands

#### View Kafka Logs
```bash
docker-compose logs kafka
```
#### View Backend Logs
```bash
docker-compose logs backend
```
#### View Frontend Logs
```bash 
docker-compose logs frontend
```
#### View Zookeeper Logs
```bash
docker-compose logs zookeeper
```

#### View all the logs
```bash
docker-compose logs
```
### Docker Volume Management Scripts

#### Get into the frontend container shell:
```sh
docker-compose exec frontend sh
```

#### List the contents of `node_modules`:
```sh
ls -l node_modules
```
#### Check the installed `react-scripts` package:
```sh
npm list react-scripts
```

#### Get into the `MongoDB` container shell:

```sh
docker-compose exec mongo sh
```
#### Start the MongoDB shell:
```sh
mongosh
```

#### List all the databases:
```sh
show databases
```

#### Switch to the financialDb database:
```sh
use financialDb
```

#### List tables:
```sh
show tables
```

#### Query the transactions collection:
```sh
db.transactions.find().pretty()
```


## Key Components of Kafka
Apache Kafka is a distributed streaming platform used to build real-time data pipelines and applications. Here's a breakdown of its core components and concepts:

`Brokers:` These are the core of Kafka, storing and serving messages to consumers. Brokers handle the compute and storage tasks and can operate as a single unit or in a cluster. An odd number of brokers is recommended for better fault tolerance.

`Topics:` Messages in Kafka are organized into topics. Producers send messages to topics, and consumers read messages from topics.

`Zookeeper:` Although Kafka can run without it, Zookeeper is traditionally used for managing and coordinating Kafka brokers. It handles service discovery, retrieves service addresses, and manages leader elections in a Kafka cluster.

`Producers and Consumers:` Producers send messages to Kafka topics, while consumers read messages from these topics. Kafka supports multiple language drivers for this interaction.

`Admin Client:` This tool is used for administrative tasks like creating topics, managing partitions, and adjusting offsets.

`Kafka REST Proxy:` Provides a RESTful API to interact with Kafka, making it easier to manage clusters without using the command line.

`Kafka Connect:` Simplifies integration with other systems by providing pre-built connectors. It allows data to flow into and out of Kafka topics with minimal configuration, supporting systems like MongoDB, Elasticsearch, and S3.

`Kafka Streams:` A powerful library for building real-time applications. It enables processing and analyzing data stored in Kafka topics using stream processing.

`Messages (Records/Events):` In Kafka, messages are called records or events. Each message has a key, value, timestamp, and optional headers for metadata. The key is essential for load distribution and filtering by consumers.
