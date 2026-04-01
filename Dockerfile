FROM node:18
WORKDIR /app

COPY    ./ ./

RUN npm i

EXPOSE 9000

CMD ["node","app.js"]
