describe('Body Test', () => {
    const request = {
    method: 'GET',
    url: 'https://api.aviationstack.com/v1/airplanes?access_key=86c397ee1a6be8970902d7ca1ace5623',
    
    failOnStatusCode: false
  };

  it('complex post test', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
      cy.log('yanit:',JSON.stringify(response))
      cy.log('yanit:',JSON.stringify(response.body));
    })
  })
})