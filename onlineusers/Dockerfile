FROM node:14

WORKDIR /onlineusers
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 3004
CMD [ "node", "server.js" ]