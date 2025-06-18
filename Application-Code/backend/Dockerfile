# Stage 1: Build the application
FROM node:14 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build  # This creates optimized production build in /usr/src/app/build

# Stage 2: Serve the application
FROM node:14-alpine
WORKDIR /usr/src/app
ENV NODE_ENV production

# Install a simple HTTP server
RUN npm install -g serve

# Copy the build output from the builder stage
COPY --from=builder /usr/src/app/build ./build

# The command to serve your app
CMD ["serve", "-s", "build", "-l", "3500"]
