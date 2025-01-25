# Stage 1: Build
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the project
RUN npm run build

# Stage 2: Production
FROM node:18

# Set working directory
WORKDIR /app

# Copy only the build files from the builder stage
COPY --from=builder /app/package.json /app/package-lock.json /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install production dependencies
RUN npm install --production

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
