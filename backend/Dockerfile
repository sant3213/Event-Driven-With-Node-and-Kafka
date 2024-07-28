FROM node:20

# Create working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json /usr/src/app

RUN npm install

# Copy the application code
COPY . /usr/src/app

# Expose the port on which the application will run
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
