# base image
FROM node:13.12.0-alpine

# set working directory
RUN mkdir /app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json ./
RUN npm install --silent
COPY . ./

# start app
CMD ["npm", "start"]