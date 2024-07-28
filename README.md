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

### Solving the Issue "react-scripts: not found" in Docker
- Reinstall React:
```bash
npm install react
```

- Change the Node version to 20 (one of the latest at this time).
Remove and recreate containers
```bash
docker-compose rm
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