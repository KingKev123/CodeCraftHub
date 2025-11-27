# Use official Node.js LTS version
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Copy the entire node_modules directory (since Docker can't reach npm registry)
COPY node_modules ./node_modules

# Copy application source code
COPY src ./src

# Expose the application port
EXPOSE 3000

# Set NODE_ENV to production
ENV NODE_ENV=production

# Run the application
CMD ["node", "src/app.js"]