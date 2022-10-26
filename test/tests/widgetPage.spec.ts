import { test } from '../po/pages/index'
import { expect } from '@playwright/test';

  
test.describe("UI testing", () => {
  test.beforeEach(async ({loginPage, leftSideBar, dashboardPage, widgetPage }) => {
    await dashboardPage.goto();
    await leftSideBar.dashboardTab.click();
    await dashboardPage.dashboardName.isVisible();
    await dashboardPage.dashboardName.click();
    await expect(widgetPage.dashboardTitle).toHaveText('DEMO DASHBOARD')
    })

test('verify that resize elements inside widget', async ({widgetPage}) => {
    const firstContainerSize = await widgetPage.widgetContainer.rootEl.nth(0).boundingBox(); //widgetCard exchange
    const firstLegendSize = await widgetPage.widgetContainer.legendSection.nth(0).boundingBox();
    const firstSliderButton = await widgetPage.widgetContainer.resizeButton.nth(0).boundingBox();
    await widgetPage.dragAndDropToTheRight(firstSliderButton, 80);
    const secondContainerSize = await widgetPage.widgetContainer.rootEl.nth(0).boundingBox();
    const secondLegendSize = await widgetPage.widgetContainer.legendSection.nth(0).boundingBox();
    const secondSliderButton = await widgetPage.widgetContainer.resizeButton.nth(0).boundingBox();
    expect(firstContainerSize?.width).not.toEqual(secondContainerSize?.width);
    expect(firstLegendSize?.width).not.toEqual(secondLegendSize?.width);
    //return to initial state of widgets
    await widgetPage.dragAndDropToTheLeft(secondSliderButton, 80);
    const thirdContainerSize = await widgetPage.widgetContainer.rootEl.nth(0).boundingBox();
    const thirdLegendSize = await widgetPage.widgetContainer.legendSection.nth(0).boundingBox();
    expect(thirdContainerSize?.width).toEqual(firstContainerSize?.width);
    expect(thirdLegendSize?.width).toEqual(firstLegendSize?.width);
})

test.only('scroll into view', async ({widgetPage}) => {
    const footerSection = await widgetPage.footerSection;
    await footerSection.evaluate(elem => elem.scrollIntoView());
    await expect(footerSection).toBeEnabled();
})


test('drag and drop widgets', async ({widgetPage}) => {
    const firstContainerSize = await widgetPage.widgetContainer.rootEl.nth(0).boundingBox();
    const secondContainerSize = await widgetPage.widgetContainer.rootEl.nth(1).boundingBox();
    const firstContainerHeader = await widgetPage.widgetContainer.headerSection.nth(0);
    const secondContainerHeader = await widgetPage.widgetContainer.headerSection.nth(1);
    await firstContainerHeader.dragTo(secondContainerHeader);
    const secondTimeSecondContainerSize = await widgetPage.widgetContainer.rootEl.nth(1).boundingBox();
    expect(secondContainerSize?.x).toEqual(secondTimeSecondContainerSize?.x);
    expect(secondContainerSize?.y).not.toEqual(secondTimeSecondContainerSize?.y);
    //return to initial state of widgets
    const interimFirstContainerHeader = await widgetPage.widgetContainer.headerSection.nth(0);
    const interimSecondContainerHeader = await widgetPage.widgetContainer.headerSection.nth(3);
    await interimFirstContainerHeader.dragTo(interimSecondContainerHeader);
    const finalFirstContainerSize = await widgetPage.widgetContainer.rootEl.nth(0).boundingBox();
    expect(finalFirstContainerSize?.x).toEqual(firstContainerSize?.x);
    expect(finalFirstContainerSize?.y).toEqual(firstContainerSize?.y);
})

})