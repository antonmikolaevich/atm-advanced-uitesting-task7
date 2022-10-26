import { Locator, Page } from "@playwright/test";
import { Api } from '../../api/api'
import { responseBody } from "../../constant/constant";
import { BASE_URL } from "../../constant/constant";

export class LoginPage {
    readonly page: Page;

    readonly emailField: Locator;

    readonly passwordField: Locator;

    readonly loginButton: Locator;

    readonly api: Api;

    readonly url: string;

    constructor(page: Page, url = `${BASE_URL}/ui/login`){
        this.page = page;
        this.emailField = this.page.locator("input[placeholder='Login']");
        this.passwordField = this.page.locator("input[placeholder='Password']");
        this.loginButton = this.page.locator("button[type='submit']");
        this.api = new Api(this.page);
        this.url = url;
    }

    async login () {
        await this.page.goto(this.url);
        await this.emailField.fill('superadmin');
        await this.passwordField.fill('erebus');
        await this.loginButton.click();
        await this.page.waitForURL(/dashboard/, {
            waitUntil: "commit",
          });
    }

    async goto(url: string) {
        await this.page.goto(url);
      }

    async loginPageMockingWidgets() {
        await this.api.mockingWidgets(`/api/v1/superadmin_personal/dashboard/58`, responseBody);
    }  

}