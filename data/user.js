import { Role } from "testcafe";
import loginPage from "../pageObjects/loginPage";

const loginPageUrl = `${loginPage.baseUrl}${loginPage.url}`;

export const validUser = Role(
  loginPageUrl,
  async () => {
    await loginPage.login("test123234", "Test12345");
  },
  { preserveUrl: true }
);