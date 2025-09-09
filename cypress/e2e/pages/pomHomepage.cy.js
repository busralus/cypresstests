import { homepage, Homepage } from './homepage'
import { Login2 } from './login2';

const Homepagetest = new homepage();
const LoginPage2 = new Login2();

describe("Page object homework", () => {
  it("login page test2", () => {
    LoginPage2.navigate();
    LoginPage2.validateLoginTitle();
    LoginPage2.validateInputs();
    LoginPage2.validateButton();
    LoginPage2.validatePasswordLink();
    LoginPage2.registerInputs();

    Homepagetest.validateBell()
    Homepagetest.clickonBell()
    
    Homepagetest.clickonBell()
    Homepagetest.validateHeader()
    
    Homepagetest.scrolltothecenter()
    Homepagetest.validateTrainingHours()
    Homepagetest.scrolltothebottom()
    Homepagetest.validateMyStudy()
    
  });
})