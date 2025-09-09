describe('httpbin tests', () => {
  const request = {
    method: 'GET',
    url: 'https://httpbin.org/headers',
    headers: {
      "customHeader": "customValue"
    },
    failOnStatusCode: false
  };

  it('test that header set correctly', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
      assert.equal("customValue", response.requestHeaders.customHeader);
    })
  })
})

//Başlıklar (headers), HTTP isteği ile birlikte gönderilen metadatalardır. Bu başlıkları headers özelliği ile belirleyebiliriz. 
//Başlıklar, anahtar-değer çiftlerinden oluşan bir nesnedir.

//Yukarıda, başlıkları ayarlayan ve doğruluğunu kontrol eden bir kapsamlı test örneği bulunmaktadır 
//(httpbin, tüm istek başlıklarını responseHeaders.customHeader alanında döndürür)

