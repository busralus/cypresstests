describe('Response Time Test', () => {
  const request = {
    method: 'GET',
    url: 'https://api.aviationstack.com/v1/flights?access_key=86c397ee1a6be8970902d7ca1ace5623',
    headers: {
    Connection: "keep-alive",
    Server: 'cloudflare'
    },
    failOnStatusCode: false
  };

  it('test that response time is <300', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
      
      expect(response.duration).to.be.lessthan(300)
    })
  })
})