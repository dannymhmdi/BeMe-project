FROM node:18.19.0

WORKDIR /app
COPY . /app

RUN npm install
RUN npm run build
EXPOSE 3000

CMD ["npm", "run", "start"]

