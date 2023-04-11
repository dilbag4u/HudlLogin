import { test } from '@playwright/test';
import * as login from '../../pages/hudlLogin';

const userEmail = process.env.USER_EMAIL;
let userPassword = process.env.USER_PASSWORD;

test.beforeEach(async ({ page }) => {
  await login.goToHudlLogin(page);
});

test('Can registered user login successfully', async ({ page }) => {
  await login.enterEmailAndPassword(page, userEmail, userPassword);
  await login.clickLoginBtn(page);
  await login.verifyUserLogedIn(page);
});

test('verify clicking on login with empty login fields showing error message', async ({ page }) => {
  await login.clickLoginBtn(page);
  await login.verifyIncorrectLoginErrMsg(page);
  await login.verifyOnErrorLoginBtnDisable(page);
});

test('verify incorrect password showing error message', async ({ page }) => {
  await login.enterEmailAndPassword(page, userEmail, (userPassword = null));
  await login.clickLoginBtn(page);
  await login.verifyIncorrectLoginErrMsg(page);
  await login.verifyOnErrorLoginBtnDisable(page);
});

test('verify default value of remember me checkbox is unchecked', async ({ page }) => {
  login.verifyRememberMeChkboxDefaultValueUnchecked(page);
});

test('verify clicking on need help link redirecting to reset password section ', async ({ page }) => {
  await login.clickNeedHelp(page);
  await login.verifyResetPasswordEmailVisible(page);
});

test('verify clicking on sign up redirecting to register sign up page', async ({ page }) => {
  await login.verifySignUplink(page);
});

test('verify clicking on login with organization link redirecting to Org login page', async ({ page }) => {
  await login.verifyOrganizationLogin(page);
});
