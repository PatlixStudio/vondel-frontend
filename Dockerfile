FROM node:20

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

RUN npm install -g @angular/cli @ionic/cli

CMD ["ionic", "serve", "--host=0.0.0.0", "--port=8100", "--no-open"]