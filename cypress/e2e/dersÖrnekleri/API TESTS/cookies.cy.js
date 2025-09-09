//Cookie — Tarayıcıda saklanan ve her HTTP isteği ile otomatik olarak gönderilen bir veri parçasıdır. Genellikle oturum yönetimi, kullanıcı tercihleri 
//veya takip için kullanılır.
//Eğer cy.request() fonksiyonunu kullanıyorsanız, çerez göndermek için Cookie başlığını kullanabilir ve anahtar-değer çiftini şu şekilde 
//belirtebilirsiniz: anahtar=değer.

//Neden response.requestHeaders['Cookie'] Kullanılıyor?

//Bu sözdizimi, nesnenin Cookie başlığına erişmek için kullanılır. Kare parantezler (square brackets), özellikle anahtarın bir değişken veya özel 
//karakterler içermesi durumunda kullanılır. Bu sayede anahtara güvenli bir şekilde erişilebilir.

describe('httpbin tests', () => {

  const request = {
    method: 'GET',
    url: 'https://httpbin.org/headers',
    headers: {
      'Cookie': 'cookieName=cookieValue'
    },
    failOnStatusCode: false
  };

  it('test send cookie', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
      assert.equal("cookieName=cookieValue", response.requestHeaders['Cookie']);
    })
  })
})
