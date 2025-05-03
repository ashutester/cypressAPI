
describe('This is a test to check Pet stoer API',()=>{

    it('This is a a test to list down all the pets',
      {baseUrl: Cypress.env('petUrl')},
      ()=>{

      cy.api({
        method : 'GET',
        url : '/pet/findByStatus?status=available',
        })
        .its('status').should('equal',200)
        // .then((response)=>{
        //     expect (response[0].id).to.contain('54');
        // })
      })
    
    it('This is test to check json from fixture file',{baseUrl: Cypress.env('petUrl')}, () => {
        cy.fixture('example').then((myFixtureData)=>{
            const requestBody = myFixtureData;
            cy.api({
                method: 'POST',
                url:'/user',
                body: requestBody
             }).its('status').should('equal',200)
        });
        

    });
    it('This is a test to get the newly created user details',{baseUrl: Cypress.env('petUrl')}, () => {
            cy.api({
                method: 'GET',
                url:'/user/nandu',
             }).then((response)=>{
                expect(response.body.lastName).contains("Bapat");
                expect(response.status).equals(200);
              });
    })
})