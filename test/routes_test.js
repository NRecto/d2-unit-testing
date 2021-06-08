const chai = require("chai");
const expect = chai.expect;

const http = require("chai-http");
chai.use(http);

describe("api_test_suite", () => {
  it("test_api_get_people_is_running", () => {
    chai
      .request("http://localhost:5002")
      .get("/people")
      .end((err, res) => {
        expect(res).to.not.equal(undefined);
      });
  });

  it("test_api_get_people_returns_200", (done) => {
    chai
      .request("http://localhost:5002")
      .get("/people")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });

  it("test_api_post_person_returns_400_if_no_person_name", (done) => {
    chai
      .request("http://localhost:5002")
      .post("/people")
      .type("json")
      .send({
        alias: "jason",
        age: 28,
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });

  it("test_api_post_person_returns_400_if_no_person_age", (done) => {
    chai
      .request("http://localhost:5002")
      .post("/people")
      .type("json")
      .send({
        name: "jason",
        email: 28,
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });
});
