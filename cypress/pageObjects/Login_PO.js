class Login_PO {

    // Elements on the login page
    loginLogo = '.login_logo'
    usernameField = '#user-name'
    passwordField = '#password'
    loginButton = '#login-button'
    appLogo = '.app_logo'

    // Actions performed on the login page
    visitLoginPage() {
        cy.visit('/')
        cy.get(this.loginLogo).should('have.text', 'Swag Labs')
    }

    enterLoginCredentials(username, password) {
        cy.get(this.usernameField).type(username)
        cy.get(this.passwordField).type(password)
    }

    clickLoginButton() {
        cy.get(this.loginButton).click();
        cy.get(this.appLogo).should('have.text', 'Swag Labs')
          .then(() => {
            // Login was successful
            cy.log('Login successful');
          })
          .then(null, () => {
            // Login failed, assert for the error message
            cy.log('Login failed');
            cy.get('h3[data-test="error"]')
              .should('be.visible')
              .and('have.text', 'Epic sadface: Sorry, this user has been locked out.');
          });
      }
}

export default Login_PO;