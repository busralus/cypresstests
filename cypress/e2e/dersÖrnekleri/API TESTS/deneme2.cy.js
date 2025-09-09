describe('httpbin tests', () => {

  const request = {
    method: 'GET',
    url: 'https://httpbin.org/get',
    
  };

  it('get request', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
      console.log('yanit:',response)
      cy.log('yanit:',JSON.stringify(response))
      cy.log('yanit:',JSON.stringify(response.body))
      cy.log('yanit:',JSON.stringify(response.headers))
      cy.log('yanit:',JSON.stringify(response.status))
      cy.log('yanit:',JSON.stringify(response.statusText))
      cy.log('yanit:',JSON.stringify(response.duration))
    })
  })

})