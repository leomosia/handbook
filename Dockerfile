FROM node:20-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    git \
    psmisc \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Trust the repo directory (owner mismatch with mounted volume)
RUN git config --global --add safe.directory /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 1313

CMD ["npm", "run", "dev"]
