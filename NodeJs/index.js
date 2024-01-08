const app = require("./app");
const db = require("./config/db");
const userModel = require("./model/user.model");

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`);
});
