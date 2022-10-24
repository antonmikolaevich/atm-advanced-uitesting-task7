import { Locator, Page } from "@playwright/test";

export class DashboardPage {
    readonly page: Page;

    readonly dashboardName: Locator

    constructor(page: Page){
        this.page = page;
        this.dashboardName = this.page.locator("[class*='dashboard-table'] [href*='dashboard']", { hasText: 'DEMO DASHBOARD'});
    }
}