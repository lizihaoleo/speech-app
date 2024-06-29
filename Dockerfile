# Use the base image from devcontainer.json
FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
EXPOSE 3000
CMD [ "npm", "start" ]