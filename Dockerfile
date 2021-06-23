FROM node:alpine

RUN npm install pm2 -g

WORKDIR /usr/src/app

COPY package*.json ./
COPY package-lock.json ./
COPY .env ./

RUN npm install

COPY ./dist .

EXPOSE 5000

CMD ["pm2-runtime", "main.js"]
