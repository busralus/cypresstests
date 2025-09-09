export class Login {
  navigate(){
    cy.visit("https://www.edu.goit.global/account/login");
  }
  validateLoginTitle(){
    cy.get(".eckniwg2").should("be.visible");
    cy.get(".eckniwg2").should("have.text", "Log in");
  }
  validateInputs(){
    cy.get("#user_email").should("be.visible");
    cy.get("#user_password").should("be.visible");
  }
  validateButton(){
    cy.get(".eckniwg2").should("have.css", "background-color", "rgb(255, 107, 10)").and('be.visible');
  }
  validatePasswordLink(){
    cy.get(".next-1f1fv1i > .next-1qrvie4").should("be.visible");
    cy.get(".next-1f1fv1i > .next-1qrvie4").should("have.text", "I can't remember the password");
  }
  
}
