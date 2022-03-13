FROM node:14.17.6 AS base

COPY [".", "/usr/local/app"]

WORKDIR /usr/local/app

RUN yarn install

EXPOSE 4000

CMD ["yarn", "run", "dev"] 