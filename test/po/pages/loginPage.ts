import { Locator, Page } from "@playwright/test";
import { Api } from '../../api/api'
import { responseBody } from "../../constant/constant";

export class LoginPage{
    readonly page: Page;

    readonly emailField: Locator;

    readonly passwordField: Locator;

    readonly loginButton: Locator;

    readonly api: Api;

    constructor(page: Page){
        this.page = page;
        this.emailField = this.page.locator("input[placeholder='Login']");
        this.passwordField = this.page.locator("input[placeholder='Password']");
        this.loginButton = this.page.locator("button[type='submit']");
        this.api = new Api(this.page);
    }

    async login () {
        await this.page.goto('http://localhost:8080/');
        await this.emailField.fill('superadmin');
        await this.passwordField.fill('erebus');
        await this.loginButton.click();
        await this.page.waitForURL(/dashboard/, {
            waitUntil: "commit",
          });
    }

    async goto() {
        await this.page.goto('http://localhost:8080/');
      }

    async loginPageMockingWidgets() {
        await this.api.mockingWidgets("http://localhost:8080/api/v1/superadmin_personal/dashboard/58", responseBody);
    }  

}