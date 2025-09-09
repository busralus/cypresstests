//testini adım adım çalıştırmak için hata ayıklama modunun kullanılmasıdır.
//Test sırasında geliştirici panelinin açık olması gerekmektedir. Test, debugger komutunda duraklayacak ve her seferinde adım adım ilerleyerek 
//doğru verileri görmenizi sağlayacaktır.

it('response code should be 200', () => {
    const request = {
      method: 'GET',
      url: 'https://reqres.in/api/users/2',
    };

    cy.request(request).then(resp => {
      debugger;

      const body = resp.body;

      const email = body.data.email;

      assert.equal("janet.weaver@reqres.in", email);
    })
  })
