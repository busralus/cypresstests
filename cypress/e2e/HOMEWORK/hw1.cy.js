describe('True GET Request', () => {

  const request = {
    method: 'GET',
    url: 'https://api.aviationstack.com/v1/flights?access_key=86c397ee1a6be8970902d7ca1ace5623',
    
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