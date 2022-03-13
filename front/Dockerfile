FROM node:14.17.6 AS base

COPY [".", "/usr/local/front"]

WORKDIR /usr/local/front

RUN npm install

EXPOSE 3000

CMD ["yarn", "start"]