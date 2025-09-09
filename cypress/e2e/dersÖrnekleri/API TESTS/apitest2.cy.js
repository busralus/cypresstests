describe('httpbin tests', () => {
  it('response code should be 200', () => {
    cy.request('https://httpbin.org/non-existing-url').then(response => {
      const status = response.status;

      assert.equal(200, status);
    })
  })
})

//failOnStatusCode: false kullanmadan yazarsak 404 döndürüyor