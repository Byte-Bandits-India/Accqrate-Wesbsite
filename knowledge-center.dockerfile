FROM node:22-alpine

RUN apk --no-cache --update add git bash bash-completion

USER node

WORKDIR /home/node/knowledge-center