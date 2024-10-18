FROM node:22.10.0-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=4000
EXPOSE 4000
CMD ["npm","run", "dev"]