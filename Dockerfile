FROM node:carbon

# Set the Working Directory
WORKDIR /app
# Install Production Dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy the App Files
COPY . .

# Expose Port 3000
EXPOSE 3000

# TODO: Figure out setting production secrets from Docker secrets & for Kubernetes

# Start the App in Production Mode
ENV NODE_ENV=production
RUN npm start;
