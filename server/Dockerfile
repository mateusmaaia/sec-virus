FROM node:11.12-alpine

ENV NODE_PATH=/app

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 5052

CMD [ "npm", "start" ]
