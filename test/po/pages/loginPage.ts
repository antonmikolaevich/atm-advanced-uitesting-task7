import { Locator, Page } from "@playwright/test";

export class LoginPage{
    readonly page: Page;

    readonly emailField: Locator;

    readonly passwordField: Locator;

    readonly loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.emailField = this.page.locator("input[placeholder='Login']");
        this.passwordField = this.page.locator("input[placeholder='Password']");
        this.loginButton = this.page.locator("button[type='submit']");
    }

    async login () {
        await this.emailField.fill('superadmin');
        await this.passwordField.fill('erebus');
        await this.loginButton.click();
    }

    async goto() {
        await this.page.goto('http://localhost:8080/');
      }

}