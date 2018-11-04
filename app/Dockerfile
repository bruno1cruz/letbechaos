FROM node:carbon

WORKDIR /app

COPY . .

EXPOSE 5000

RUN npm install --production

ENTRYPOINT [ "npm", "start" ]