FROM node:19-alpine As development

RUN apk update && apk add make g++ git

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
COPY --chown=node:node . .

RUN npm ci && npm i -g create-react-app
RUN npm run build

USER node

# Start the app
#CMD [ "npx", "serve", "build" ]
CMD [ "npm", "start" ]