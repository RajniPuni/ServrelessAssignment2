FROM node:14

WORKDIR /register
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 4001
CMD [ "node", "server.js" ]
