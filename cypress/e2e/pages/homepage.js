export class homepage {

url='https://www.edu.goit.global/account/login'
bell='[data-testid="NotificationMenu__button"]'
hamburgermenu='open-navigation-menu-mobile'
kitty='next-1sh4jrc e1uudr7b11'
notification='.next-1w0tmzj'
header='.next-1ib1no1'
attendance='.next-pqqsgd > :nth-child(3)'
traininghours='.next-17vciwd > .e1dapi390'
MyStudy=':nth-child(6) > .e1dapi390'
GoToTheCourseButton='#go-to-the-course-homepage-widget'
url= 'https://www.edu.goit.global/account/login'


navigate(){
cy.visit(this.url);
  }  
   
validateBell(){
    cy.get(this.bell).should('be.visible').and('exist');
}
clickonBell(){
    cy.get(this.bell).click()
}
validateNotifications(){
    cy.wrap(this.notification).should('be.visible').and('include','Notifications')
}
validateHeader(){
    cy.get(this.header).should('be.visible').and('contain.text','Hello, Büşra Luşoğlu _!')
}
validateAttendance(){
    cy.get(this.attendance).should('be.checked')
}
scrolltothecenter(){
    cy.scrollTo('center')
}
validateTrainingHours(){
    cy.get(this.traininghours).should('be.visible')
}
scrolltothebottom(){
    cy.scrollTo('bottom')
}
validateMyStudy(){
    cy.get(this.MyStudy).should('be.visible').and('contain.text','My study')
}
validateGoToCourseButton(){
    cy.get(this.GoToTheCourseButton).should('be.visible').and('include','Go to the course')

    
}
}

