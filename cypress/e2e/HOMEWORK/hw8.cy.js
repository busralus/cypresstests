describe('Body Test2', () => {
  it('validate IP address', () => {
    const request = {
      method: 'GET',
      url: 'http://api.ipstack.com/134.201.250.155',
      qs: {
        access_key: '66147b75af2ae93d8c37d341d091fe6d'
      },
      failOnStatusCode: false
    };

    cy.request(request).then(response => {
      assert.equal(response.status, 200);

      cy.log('yanit:', JSON.stringify(response.body));

      
      const ip = response.body;

     
      assert.equal(ip.type, 'ipv4');
      assert.equal(ip.country_code, 'US');
      assert.equal(ip.ip, '134.201.250.155');
    });
  });
});