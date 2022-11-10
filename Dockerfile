FROM node:16

WORKDIR /app

COPY package.json ./

RUN npm install --omit=dev

ADD ./prod .

ENV WEBSITE_PORT=4427

EXPOSE ${WEBSITE_PORT}

CMD ["npm", "start"]