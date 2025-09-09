describe('Body Test', () => {
  it('validate airplane fields', () => {
    const request = {
      method: 'GET',
      url: 'https://api.aviationstack.com/v1/airplanes',
      qs: {
        access_key: '86c397ee1a6be8970902d7ca1ace5623'
      },
      failOnStatusCode: false
    };

    cy.request(request).then(response => {
      assert.equal(response.status, 200);

      cy.log('yanit:', JSON.stringify(response.body));

      
      const airplane = response.body.data[0];

     
      assert.equal(airplane.plane_series, '377');
      assert.equal(airplane.iata_type, 'B737-300');
      assert.equal(airplane.production_line, 'Boeing 737 Classic');
    });
  });
});
