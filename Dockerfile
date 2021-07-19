FROM node:14.17-alpine

COPY package.json .
COPY yarn.lock .

RUN yarn
COPY . .
RUN yarn build

CMD ["yarn", "start"]
