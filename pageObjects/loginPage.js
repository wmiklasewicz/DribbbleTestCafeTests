import { Selector as $, t } from 'testcafe';
import basePage from './basePage';

const loginPage = {
  url:            'login/',
  usernameInput:  $('#login'),
  passwordInput:  $('#password'),
  loginButton:    $('.button'),

  async login(username, password) {
    await t
      .typeText(this.usernameInput, username)
      .typeText(this.passwordInput, password)
      .click(this.loginButton);
  }
}
export default {...basePage, ...loginPage}