describe('httpbin tests', () => {
  const request = {
    method: 'POST',
    url: 'https://httpbin.org/post',
    failOnStatusCode: false
  };

  it('response code should be 200', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
    })
  })
})

//methodu POST olarak göndermek