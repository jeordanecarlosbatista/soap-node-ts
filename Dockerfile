FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./ 

COPY dist ./dist

COPY .env ./

RUN npm install

CMD [ "npm", "start" ]