describe('httpbin tests', () => {
  const request = {
    method: 'GET',
    url: 'https://httpbin.org/headers',
    headers: {
      'user-agent': 'My test user-agent'
    },
    failOnStatusCode: false
  };

  it('test that user-agent set correctly', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
      assert.equal("My test user-agent", response.requestHeaders['user-agent']);
    })
  })
})

//User-Agent request header — HTTP isteği başlıklarından biridir ve istemci hakkında detaylı bilgi içerir. Bu başlık, tarayıcı türü, işletim sistemi ve 
//diğer istemci özelliklerini tanımlar.
//yukarıda, yaygın bir User-Agent örneği yer almaktadır:

//Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0

//Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0

//Bu User-Agent dizesi, isteğin Firefox tarayıcısından, Macintosh üzerinde çalışan bir Intel tabanlı Mac OS X sürümünden geldiğini ifade eder.
//Aslında bu sadece bir başlıktır ve yukarıdaki gibi ayarlanabilir