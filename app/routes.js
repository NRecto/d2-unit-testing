const { names } = require("../src/util");

module.exports = (app) => {
  app.get("/", (req, res) => {
    return res.send({ data: {} });
  });

  app.get("/people", (req, res) => {
    return res.send({
      people: names,
    });
  });

  app.post("/people", (req, res) => {
    if (!req.body.hasOwnProperty("name")) {
      return res.status(400).send({
        err: "Bad request missing required parameter Name",
      });
    }

    if (!req.body.hasOwnProperty("age")) {
      return res.status(400).send({
        err: "Bad request missing required parameter Age",
      });
    }

    if (typeof req.body.name !== "string" && typeof req.body.age !== "number") {
      return res.status(400).send({
        err: "Bad request - Name has to be string && Age has to be a number",
      });
    }

    if (typeof req.body.name !== "string") {
      return res.status(400).send({
        err: "Bad request - Name has to be string",
      });
    }
    if (typeof req.body.age !== "number") {
      return res.status(400).send({
        err: "Bad request - Age has to be a number",
      });
    }

    return res.status(200).send({
      detail: "Post request success",
      people: req.body,
    });
  });
};
