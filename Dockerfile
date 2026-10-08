FROM node

WORKDIR /app
COPY package*.json package*.jaon
COPY . .
COPY index.js index.js
RUN npm install
CMD ["node", "index.js"]