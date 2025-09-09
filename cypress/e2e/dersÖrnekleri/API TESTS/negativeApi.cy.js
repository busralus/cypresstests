describe('httpbin tests', () => {
  const request = {
    url: '<https://httpbin.org/non-existing-url>',
    failOnStatusCode: false
  };

  it('response code should be 200', () => {
    cy.request(request).then(response => {
      const status = response.status;

      assert.equal(200, status);
    })
  })
})

//Bu değişikliğin nedeni, Cypress'in varsayılan olarak yanıt kodu 200'den 
//farklı olan herhangi bir istekte, bir sorun olduğunu varsayıp testi 
//başarısız olarak işaretlemesidir. Ancak API testleri sırasında bu 
//davranış uygun değildir. Bu nedenle, isteğe 
//failOnStatusCode: false parametresi ekleyerek Cypress'in başarısız 
//olmamasını sağlıyoruz.