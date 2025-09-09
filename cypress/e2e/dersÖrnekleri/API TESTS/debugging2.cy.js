//Gerekli bilgileri Cypress konsoluna yazdırmak için komut kullanmak. Kullanım örneği:
//Testi çalıştırırken, geliştirme araçlarını açmamız gerekiyor ve konsol sekmesinde ek bilgileri görüntüleyebiliriz. 
//Test tamamlandığında, testin gövdesinde ek bilgi görünecektir. Bu alana tıkladığınızda, o bilgiye konsolda erişim sağlayabilirsiniz.


it('response code should be 200', () => {
    const request = {
      method: 'GET',
      url: 'https://reqres.in/api/users/2',
    };

    cy.request(request).then(resp => {
      cy.log(resp.body.data.email);
      assert.equal("janet.weaver@reqres.in", resp.body.data.email);
    })
  })
