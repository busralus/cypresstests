describe('httpbin tests', () => {
  const request = {
    url: 'https://httpbin.org/get',
    qs: {
      StatusCode: "200"
      
    },
    failOnStatusCode: false
  };

  it('response value should be value', () => {
    cy.request(request).then(response => {
      assert.equal("200", response.body.args.StatusCode);
    })
  })
})

//HTTP isteklerine query parametreleri eklemek için qs alanını kullanırız. Bu alan, query string içindeki parametre adlarını ve değerlerini anahtar-değer
//çifti olarak içeren bir nesnedir.
//Yukarıda, bir query parametresi ile https://httpbin.org/get URL’sine gönderilen bir isteği içeren bir test örneği bulunmaktadır. 
//Bu parametre key adında ve değeri value. Tarayıcıda bu şu şekilde görünürdü: https://httpbin.org/get?key=value.
//httpbin, isteğe yanıt olarak gövde içinde args alanında tüm parametreleri döndürür ve biz de bunu kontrol edebiliriz
//Yani, response.body.args.key bize value değerini döndürmelidir ve bunu doğruluyoruz
