describe("This is my first cypress api test", () => {
  it("This is first get request", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
      .its("status")
      .should("equal", 200);
  });
  it("This is first post call", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts/",
      body: {
        title: "Test post",
        userId: 1,
        body: "This is post call",
      },
    }).its('status').should('equal',201)
  });

  it('This is put request', () => {
    
    cy.request({
            method: 'PUT',
            url: "https://jsonplaceholder.typicode.com/posts/",
            title: 'Test post',
            body: 'This is PUT call',
            userID: 1,
            id: 1
        }).its('status').should('equal',200)
  });
  it('This is delete request', () => {
    cy.request({
        method: 'DELETE',
        url: 'https://jsonplaceholder.typicode.com/posts/1',    
    }).its('status').should('equal',200)
  });
});
