FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Build the static React app
RUN npm run build

# Install serve to serve the static files
RUN npm install -g serve

# Serve the built files
CMD ["serve", "-s", "build", "-l", "3000"]
