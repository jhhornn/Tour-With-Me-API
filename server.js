/* eslint-disable no-console */
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, './config.env') });
const http = require('http');
const connectDB = require('./config/database');
const app = require('./app');

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  server.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
  });
});
