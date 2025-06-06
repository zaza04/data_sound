// index.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json'); // Trỏ đến file db.json của bạn
const middlewares = jsonServer.defaults();

// Render.com sẽ cung cấp PORT qua biến môi trường.
// Nếu chạy ở local, nó sẽ dùng cổng 3001.
const port = process.env.PORT || 3002;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});