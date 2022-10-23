FROM node:alpine
ENV NODE_ENV=production
WORKDIR /src
COPY . .
RUN npm install --production --silent
RUN npm run build
EXPOSE 3000
RUN chown -R node /src
USER node
CMD ["npm", "start"]
