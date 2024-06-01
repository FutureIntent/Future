# Use an existing image as a base
FROM node:lts-alpine3.20

# Set the working directory
WORKDIR /usr/src/app

# Install Nest.js
RUN npm i -g @nestjs/cli

# Copy the package.json and package-lock.json files
COPY ./NestFuture/package*.json .

# Install the dependencies
RUN npm install

# Copy the rest of the code
COPY ./NestFuture .

# Expose the port that the app listens on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "run", "start:dev"]