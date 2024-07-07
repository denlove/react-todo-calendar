FROM node:22.2.0

WORKDIR /app

ENV HUSKY=0

COPY package.json yarn.lock ./

RUN apt-get update && apt update
RUN yarn