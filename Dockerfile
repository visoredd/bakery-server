# Use an official Node.js runtime as a base image with a specified version
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire application to the container
COPY . .

# Expose the port that the Express app will run on
EXPOSE 5000

# Command to run the Express app
CMD ["npm", "start"]
