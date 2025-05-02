import { faker } from "@faker-js/faker";
describe("Test to check different POST request types", () => {
  it("Hard Coded variables json object", () => {
    const requestBody = {
      name: faker.person.firstName(),
      job: faker.person.jobType(),
    };
    const reqHeaders = {
      "x-api-key": "reqres-free-v1",
    };
    cy.request({
      method: "POST",
      headers: reqHeaders,
      url: "https://reqres.in/api/users",
      body: requestBody,
    }).then((response) => {
      expect(response.body.id).not.to.be.null;
      expect(response.body.createdAt).contains("2025");
    });
  });
  it("This is to get specific user", () => {
    const reqHeaders = {
      "x-api-key": "reqres-free-v1",
    };
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users/10",
      headers: reqHeaders,
    }).then((response) => {
      expect(response.body.data.email).to.equal("byron.fields@reqres.in");
    });
  });
});
