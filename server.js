const express = require("express");
const app = express();

const port = 5002;

app.use(express.json());

require("./app/routes")(app, {});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
