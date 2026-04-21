# DevOps Backend Project 🚀

## 📦 Stack
- Node.js
- Express
- MongoDB
- Docker

## ⚙️ Features
- REST API (CRUD Users)
- MongoDB integration
- Dockerized backend
- Mongo Express UI

## 🚀 Run Project

### Create network
docker network create my-app-network

### Run MongoDB
docker run -d --name my-mongo --network my-app-network -p 27018:27017 mongo:4.4

### Build backend
docker build -t my-backend .

### Run backend
docker run -d --name my-backend-container --network my-app-network -p 3000:3000 my-backend

### Mongo UI
http://localhost:8082

## 📡 API Endpoints

- POST /users
- GET /users
- PUT /users/:id
- DELETE /users/:id
