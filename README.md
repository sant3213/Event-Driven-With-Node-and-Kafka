# Event-Driven-With-Node-and-Kafka

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

1. `Producers:` Producers are applications that send data (records) to Kafka topics.
2. `Consumers:` Consumers read data from Kafka topics.
3. `Topics`:  A stream of records (similar to a table in a database) where each record consists of a key, a value, and a timestamp.
4. `Brokers:` Kafka runs as a cluster of one or more servers (brokers) that handle data replication, partitioning, and distribution.