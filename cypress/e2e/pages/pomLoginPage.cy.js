import { Login } from "./login";
import { Login2 } from "./login2";
const LoginPage = new Login();
const LoginPage2 = new Login2();

describe("Page object homework", () => {
  it("login page test", () => {
// visit login page
    LoginPage.navigate();
// check login title
    LoginPage.validateLoginTitle();
// check emial&password inputs
    LoginPage.validateInputs();
// check login button&its color
    LoginPage.validateButton();
// check forgetmypassword link
    LoginPage.validatePasswordLink();
});
it("login page test2", () => {
    LoginPage2.navigate();
    LoginPage2.validateLoginTitle();
    LoginPage2.validateInputs();
    LoginPage2.validateButton();
    LoginPage2.validatePasswordLink();
  });
});










