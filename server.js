const jsonServer = require("json-server");

const server = jsonServer.create();

const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use("/", router);

const PORT = process.env.PORT || 3002;
server.listen(PORT, () => {
  console.log(`Json-server is running on port ${PORT}`);
});