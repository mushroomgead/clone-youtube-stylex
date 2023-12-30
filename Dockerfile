FROM --platform=linux/amd64 node:18.19.0-alpine3.19

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

ENTRYPOINT [ "npm", "start" ]