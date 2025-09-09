describe("İlk test bloğumuz", () => {
  it("LMS sitesini ziyaret testi", () => {
    cy.visit("https://www.edu.goit.global/account/login")
  
    cy.get("#user_email").type("busralusoglu@gmail.com");
    cy.get('#user_password').type('Busgraj93')
    
    cy.get('[type="submit"]').should("have.text", "Log in");
    cy.get('[type="submit"]').should("have.css", "background-color", "rgb(255, 107, 10)")
    cy.get('.eckniwg2').click()

    cy.get('[id="go-to-the-course-homepage-widget"]').scrollIntoView().should("be.visible")



  })
  
})
