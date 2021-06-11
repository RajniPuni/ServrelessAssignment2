FROM node:14

WORKDIR /login
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 3003
CMD [ "node", "server.js" ]