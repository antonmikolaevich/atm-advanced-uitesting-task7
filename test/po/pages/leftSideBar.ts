import { Locator, Page } from '@playwright/test';

export class LeftSideBar {
    readonly page: Page;

    readonly launchTab: Locator;

    readonly dashboardTab: Locator;

    constructor(page: Page){
        this.page = page;
        this.launchTab = this.page.locator('[class*="sidebarButton"] a[href*="launches"]');
        this.dashboardTab = this.page.locator('[class*="sidebarButton"] a[href*="dashboard"]');
    }
}