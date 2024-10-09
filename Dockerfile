FROM node:lts-alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --development --silent && mv node_modules ../
COPY . .
EXPOSE 4200
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
