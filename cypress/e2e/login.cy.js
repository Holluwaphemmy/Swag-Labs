import Login_PO from "../pageObjects/Login_PO";

describe('Swag Labs Login Test Suite', () => {

  let loginData;

  beforeEach(() => {

    cy.fixture('login.json').then((data) => {
      loginData = data
    })

  })

  it('Should login as a standard user', () => {
    // Creating an instance of the Login_PO class
    const login_PO = new Login_PO()
    login_PO.visitLoginPage()
    login_PO.enterLoginCredentials(loginData.standard_username, loginData.password)
    login_PO.clickLoginButton()
  })

  it('Should login as a locked out user', () => {
    // Creating an instance of the Login_PO class
    const login_PO = new Login_PO()
    login_PO.visitLoginPage()
    login_PO.enterLoginCredentials(loginData.locked_out_username, loginData.password)
    login_PO.clickLoginButton()
  })

  it('Should login as a problem user', () => {
    // Creating an instance of the Login_PO class
    const login_PO = new Login_PO()
    login_PO.visitLoginPage()
    login_PO.enterLoginCredentials(loginData.problem_username, loginData.password)
    login_PO.clickLoginButton()
  })

  it('Should login as a performance glitch user', () => {
    // Creating an instance of the Login_PO class
    const login_PO = new Login_PO()
    login_PO.visitLoginPage()
    login_PO.enterLoginCredentials(loginData.performance_glitch_username, loginData.password)
    login_PO.clickLoginButton()
  })

  it('Should login as an error user', () => {
    // Creating an instance of the Login_PO class
    const login_PO = new Login_PO()
    login_PO.visitLoginPage()
    login_PO.enterLoginCredentials(loginData.error_username, loginData.password)
    login_PO.clickLoginButton()
  })

  it('Should login as a visual user', () => {
    // Creating an instance of the Login_PO class
    const login_PO = new Login_PO()
    login_PO.visitLoginPage()
    login_PO.enterLoginCredentials(loginData.visual_username, loginData.password)
    login_PO.clickLoginButton()
  })

})