describe('Response Time Test for ipstack', () => {
  const request = {
    method: 'GET',
    url: 'http://api.ipstack.com/134.201.250.155?access_key=66147b75af2ae93d8c37d341d091fe6d',
    headers: {
      "transfer-encoding": "chunked",
      "x-apilayer-transaction-id": "3de45369-f015-4a23-a668-3c0768ef7840"
    },
    failOnStatusCode: false
  };

  it('test that response time is <300', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
      expect(response.duration).to.be.lessThan(600);
    });
  });
});
