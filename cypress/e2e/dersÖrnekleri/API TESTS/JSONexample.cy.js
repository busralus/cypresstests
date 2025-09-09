describe('httpbin tests', () => {
  const bodyData = {
    bodyKey: "bodyValue"
  };

  const request = {
    method: 'POST',
    url: 'https://httpbin.org/post',
    body: bodyData,
    failOnStatusCode: false
  };

  it('complex post test', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
      assert.notStrictEqual(bodyData, response.body.data);
    })
  })
})
//Bu tür bir veri yapısını kullanarak bir HTTP isteği oluşturmak için body alanını kullanırız. Buraya bir JavaScript nesnesi aktarabiliriz. 
//Yukarıda, bu tür bir HTTP isteği için örnek bir test kodu bulunmaktadır
//Bu testte hem yanıt kodunu, hem de yanıt gövdesini kontrol ettiğimize dikkat edin. Ayrıca, bodyData nesnesini iki kez kullandığımızı unutmayın 
//hem isteği oluştururken hem de sonucu doğrularken, böylece kod tekrarından kaçınıyoruz