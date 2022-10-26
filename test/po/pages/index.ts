import { test as baseTest, Page } from "@playwright/test";
import { DashboardPage } from "./dashboardPage";
import { LeftSideBar } from "./leftSideBar"
import { LoginPage } from "./loginPage";
import { WidgetPage } from "./widgetPage";


export const test = baseTest.extend<{
  dashboardPage: DashboardPage;
  leftSideBar: LeftSideBar;
  loginPage: LoginPage;
  widgetPage: WidgetPage;
}>({
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  leftSideBar: async ({ page }, use) => {
    await use(new LeftSideBar(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  widgetPage: async ({ page }, use) => {
    await use(new WidgetPage(page));
  }
});