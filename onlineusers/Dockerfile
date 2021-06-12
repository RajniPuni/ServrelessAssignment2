FROM node:14

WORKDIR /onlineusers
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 4002
CMD [ "node", "server.js" ]
