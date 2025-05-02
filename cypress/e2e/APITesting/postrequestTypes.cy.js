import { faker } from "@faker-js/faker";
describe("Test to check different POST request types", () => {
  it("Hard Coded variables json object", () => {
    const requestHeaders = {
      "x-api-key": "reqres-free-v1",
    };
    const requestBody = {
      name: faker.person.firstName(),
      job: faker.person.jobType(),
    };

    cy.request({
      method: "POST",
      headers: requestHeaders,
      url: "/api/users",
      body: requestBody,
    }).then((response) => {
      expect(response.body.id).not.to.be.null;
      expect(response.body.createdAt).contains("2025");
    });
  });
  it("This is to get specific user", () => {
    const requestHeaders = {
      "x-api-key": "reqres-free-v1",
    };
    cy.request({
      method: "GET",
      url: "/api/users/10",
      headers: requestHeaders,
    }).then((response) => {
      expect(response.body.data.email).to.equal("byron.fields@reqres.in");
    });
  });
});
