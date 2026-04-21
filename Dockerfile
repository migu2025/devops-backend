FROM node:18

# 📁 Cartella di lavoro dentro il container
WORKDIR /app

# 📦 Copia file
COPY package*.json ./

# 📥 Installa dipendenze
RUN npm install

# 📄 Copia tutto il resto
COPY . .

# 🚀 Avvia server
CMD ["node", "server.js"]
