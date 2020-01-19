import { Role } from "testcafe";
import loginPage from "../pageObjects/loginPage";

const loginPageUrl = `${loginPage.baseUrl}${loginPage.url}`;

/* NOTE:These are test credentials for test purposes */

export const validUser = Role(
  loginPageUrl,
  async () => {
    await loginPage.login("test123234", "Test12345");
  },
  { preserveUrl: true }
);