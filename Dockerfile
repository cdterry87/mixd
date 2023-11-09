# To create the docker image run the following:
# docker build -t your-image-name .
# docker run -p 8080:8080 your-image-name

# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run your app
CMD ["npm", "run", "serve"]

# Some additional commands:
# Run `docker exec -it <container id> sh` to open a shell in the container itself
# Run `sudo docker cp <container id>:/usr/src/app/dist ~/Sites/<project name>/` to copy dist folder to host