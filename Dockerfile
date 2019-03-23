FROM node:8

WORKDIR /app

COPY portal/. /app

RUN npm install

EXPOSE 3000


CMD npm start

