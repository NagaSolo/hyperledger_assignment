FROM node:14-slim

WORKDIR /usr/app

COPY ./package*.json ./

RUN  npm install 

COPY . .

COPY ./node_modules ./src/pages

CMD ["npm", "start"]