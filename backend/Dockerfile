FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js","npm", "start"]
# # Use official Node.js base image
# FROM node:18

# # Set working directory
# WORKDIR /app

# # Install dependencies
# COPY package*.json ./
# RUN npm install

# # Copy source files
# COPY . .

# # Expose backend port (change if different)
# EXPOSE 5000

# # Start the server
# CMD ["npm", "start"]
