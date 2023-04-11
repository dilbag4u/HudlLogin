import { expect, Page } from '@playwright/test';
import config from '../playwright.config';

const baseURL = config.use.baseURL;

const loginEmailTextbox = "[id='email']";
const loginPasswordTextbox = "[id='password']";
const loginBtn = "[data-qa-id='login-btn']";
const home = "[data-qa-id='webnav-globalnav-home']";
const loginErr = "[data-qa-id='error-display']";
const rememberMe = "[data-qa-id='remember-me-checkbox-label']";
const needhelp = "[data-qa-id='need-help-link']";
const passwordResetTextbox = "[data-qa-id='password-reset-input']";
const signUp = 'Sign up';
const registerDemoBtn = "[id='register_demo']";
const orgLogin = "[data-qa-id='log-in-with-organization-btn']";
const orgEmail = "[id='uniId_1']";

export async function goToHudlLogin(page: Page) {
  if (typeof baseURL === 'string') await page.goto(baseURL);
}

export async function successfulLogin(page: Page, USER_EMAIL?: string, USER_PASSWORD?: string) {
  if (typeof USER_EMAIL === 'string') await page.locator(loginEmailTextbox).fill(USER_EMAIL);
  if (typeof USER_PASSWORD === 'string') await page.locator(loginPasswordTextbox).fill(USER_PASSWORD);
  await page.locator(loginBtn).click();
}

export async function verifyUserLogedIn(page: Page) {
  await page.locator(home).waitFor();
  expect.soft(await page.locator(home).isVisible());
}

export async function enterEmailAndPassword(page: Page, USER_EMAIL?: string, USER_PASSWORD?: string) {
  if (typeof USER_EMAIL === 'string') await page.locator(loginEmailTextbox).fill(USER_EMAIL);
  if (typeof USER_PASSWORD === 'string') await page.locator(loginPasswordTextbox).fill(USER_PASSWORD);
}

export async function clickLoginBtn(page: Page) {
  await page.locator(loginBtn).click();
}

export async function verifyIncorrectLoginErrMsg(page: Page) {
  expect.soft(await page.locator(loginBtn).isDisabled());
}

export async function verifyOnErrorLoginBtnDisable(page: Page): Promise<string> {
  const loginErrMsg = await page.locator(loginErr).innerText();

  return loginErrMsg;
}

export async function verifyRememberMeChkboxDefaultValueUnchecked(page: Page) {
  const isRememberMeChecked: boolean = await page.locator(rememberMe).isChecked();

  if (isRememberMeChecked == false) expect.soft(isRememberMeChecked, 'Remember me checkbox is unchecked');
}

export async function clickNeedHelp(page: Page) {
  await page.locator(needhelp).click();
}

export async function verifyResetPasswordEmailVisible(page: Page) {
  expect.soft(await page.locator(passwordResetTextbox).isVisible());
}

export async function verifySignUplink(page: Page) {
  expect.soft(await page.getByText(signUp).isVisible());
  await page.getByText(signUp).click();
  expect.soft(await page.locator(registerDemoBtn).isVisible());
}

export async function verifyOrganizationLogin(page: Page) {
  expect.soft(await page.locator(orgLogin).isVisible());
  await page.locator(orgLogin).click();
  expect.soft(await page.locator(orgEmail).isVisible());
}
