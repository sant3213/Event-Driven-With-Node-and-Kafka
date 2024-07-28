# Event-Driven-With-Node-and-Kafka

Comandos necesarios:
- npm init -y
- npm install kafkajs express dotenv mongodb
- docker-compose build
- docker-compose up


Solved the issue react-scripts: not found docker just running:
- I reinstalled react and changed the node version to the 20 (one of the last at this time)
- docker-compose rm   


Comandos para monitorizacion:

- docker-compose logs kafka
- docker-compose logs backend
- docker-compose logs frontend
- docker-compose logs zookeeper
