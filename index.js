// index.js
const jsonServer = require('json-server');
const express = require('express');
const path = require('path');

const server = express();

// Phục vụ các file tĩnh (âm thanh, svg) từ thư mục 'noises'
// Ví dụ: truy cập /noises/audio/rain.mp3 sẽ lấy file từ thư mục noises/audio/rain.mp3
server.use('/noises', express.static(path.join(__dirname, 'noises')));

// Thiết lập json-server router trỏ đến file db.json
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
    
server.use(middlewares);

// Để tránh xung đột với các route tĩnh, tất cả API của json-server sẽ có tiền tố /api
// Ví dụ: /sounds -> /api/sounds
server.use('/api', router);

// Sử dụng cổng mà Render cung cấp, hoặc 3001 nếu chạy ở local
const port = process.env.PORT || 3002;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Static files served from '/noises'`);
  console.log(`API available at '/api'`);
});