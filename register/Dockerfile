FROM node:14

WORKDIR /register
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 5001
CMD [ "node", "server.js" ]