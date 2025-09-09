describe('Header Test with Random parameters', () => {
  const request = {
    method: 'GET',
    url: 'https://api.aviationstack.com/v1/flights?access_key=86c397ee1a6be8970902d7ca1ace5623',
    headers: {
    Connection: "test",
    
    },
    failOnStatusCode: false
  };

  it('test that header set correctly', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
      expect(response.headers).to.have.property('connection', 'test');
      
    })
  })
})