import { Locator, Page } from "@playwright/test";

export class DashboardPage {
    readonly page: Page;

    readonly dashboardName: Locator

    constructor(page: Page){
        this.page = page;
        this.dashboardName = this.page.locator("[class*='dashboard-table'] [href*='dashboard']", { hasText: 'DEMO DASHBOARD'});
    }

    async goto() {
        await this.page.goto('http://localhost:8080/ui/#superadmin_personal/dashboard');
      }
}