describe('HeaderTest for ip stock', () => {
  const request = {
    method: 'GET',
    url: 'http://api.ipstack.com/134.201.250.155?access_key=66147b75af2ae93d8c37d341d091fe6d',
   
    failOnStatusCode: false
  };

  it('test that header set correctly', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
      expect(response.headers).to.have.property('transfer-encoding', 'chunked');
      expect(response.headers).to.have.property('x-apilayer-transaction-id');
      expect(response.headers).to.have.property('x-request-time');
    })
  })
})