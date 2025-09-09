export class Login2 {

 url= 'https://www.edu.goit.global/account/login'
 email="#user_email"
 password="#user_password"
 loginbutton=".eckniwg2"
 forgetpassword=".next-1f1fv1i > .next-1qrvie4"
 email="#user_email"
 password="#user_password"
 loginbutton=".eckniwg2"
 forgetpassword=".next-1f1fv1i > .next-1qrvie4"
  navigate(){
    cy.visit(this.url);
  }
  validateLoginTitle(){
    cy.get(this.loginbutton).should("be.visible");
    cy.get(this.loginbutton).should("have.text", "Log in");
  }
  validateInputs(){
    cy.get(this.email).should("be.visible");
    cy.get(this.password).should("be.visible");
  }
  validateButton(){
    cy.get(this.loginbutton).should("have.css", "background-color", "rgb(255, 107, 10)").and('be.visible');
  }
  validatePasswordLink(){
    cy.get(this.forgetpassword).should("be.visible");
    cy.get(this.forgetpassword).should("have.text", "I can't remember the password");
  }
 registerInputs(){
    cy.login("busralusoglu@gmail.com", "Busgraj93");
  } 
    
 } 
