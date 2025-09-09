describe("login test", () => {
  it("admin login", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.wait(5000)

    cy.login("user888@gmail.com", "1234567890");

    cy.get('#open-navigation-menu-mobile').click()

    cy.contains('button', 'Log out').click()

  });

    it("user login", () => {
    cy.visit("https://www.edu.goit.global/account/login");

    cy.login("testowyqa@qa.team", "QA!automation-1");

    cy.get('#open-navigation-menu-mobile').click()

    cy.contains('button', 'Log out').click()
    
  });

    
});

