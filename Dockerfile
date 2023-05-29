FROM node:18-alpine
WORKDIR /gif-expert-app
COPY . .
RUN npm install
CMD ["node", "src/main.jsx"]
EXPOSE 3000

