describe('httpbin tests', () => {

  const request = {
    method: 'DELETE',
    url: 'https://httpbin.org/delete',
    
  };

  it('delete request', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
      
    })
  })

})
