FROM node:alpine
WORKDIR /usr/src/app
COPY . /usr/src/app/

RUN set -ex; \
  yarn install --frozen-lockfile --production; \
  yarn cache clean; \
  yarn run build

