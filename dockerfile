FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install pm2 -g
RUN apt-get update
COPY . .
EXPOSE 3001
CMD ["npm", "run","deploy"]