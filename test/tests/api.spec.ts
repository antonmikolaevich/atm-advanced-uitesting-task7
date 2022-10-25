import { expect } from "@playwright/test";
import { test } from '../po/pages/index';
import { responseBody } from '../constant/constant'


test.describe(() => {
test("mocking example", async ({loginPage, leftSideBar, dashboardPage, widgetPage}) => {     
    await loginPage.loginPageMockingWidgets();
    await dashboardPage.goto();
    await leftSideBar.dashboardTab.click();
    await dashboardPage.dashboardName.isVisible();
    await dashboardPage.dashboardName.click();
    await expect(widgetPage.dashboardTitle).toHaveText('DEMO DASHBOARD');
    expect(await widgetPage.widgetContainer.widgetHeaderName.nth(0).innerText()).toEqual(responseBody.widgets[0].widgetName);
    expect(await widgetPage.widgetContainer.widgetHeaderName.nth(1).innerText()).toEqual(responseBody.widgets[1].widgetName);
    expect(await widgetPage.widgetContainer.widgetHeaderName.nth(2).innerText()).toEqual(responseBody.widgets[2].widgetName);
    expect(await widgetPage.widgetContainer.widgetHeaderName.nth(3).innerText()).toEqual(responseBody.widgets[3].widgetName);
       

})

})