FROM node:18.1.0 AS development

WORKDIR /Back

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm","run","start:dev"]