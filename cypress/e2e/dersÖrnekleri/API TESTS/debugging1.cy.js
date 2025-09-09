//Yöntem 1 — Gerekli bilgiyi konsola yazdırmak için console.log() komutunu kullanmak:

it('response code should be 200', () => {
    const request = {
      method: 'GET',
      url: 'https://reqres.in/api/users/2',
    };

    cy.request(request).then(resp => {
      console.log(resp);
      assert.equal("janet.weaver@reqres.in", resp.body.data.email);
    })
  })
