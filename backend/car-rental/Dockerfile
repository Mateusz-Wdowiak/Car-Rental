# Pobranie obrazu Node.js
FROM node:18

# Tworzenie katalogu aplikacji
WORKDIR /usr/src/app

# Kopiowanie package.json i package-lock.json
COPY package*.json ./

RUN npm install

# Kopiowanie kodu źródłowego do kontenera
COPY . .

# Expose port
EXPOSE 3000

# Uruchomienie aplikacji
CMD ["npm", "start"]