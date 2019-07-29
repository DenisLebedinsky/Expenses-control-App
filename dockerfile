FROM node:alpine

# Create app directory
RUN mkdir -p /src/app
WORKDIR /src/app

# Install app dependencies
COPY package.json /src/app/
RUN npm install

# Bundle app source
COPY . /src/app

EXPOSE 3000

# defined in package.json
CMD [ "npm", "run", "start" ]