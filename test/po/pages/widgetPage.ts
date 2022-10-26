import { Locator, Page } from '@playwright/test';
import { WidgetContainer } from './widgetContainer';

export class WidgetPage {
    readonly page: Page;

    readonly dashboardTitle: Locator;

    readonly widgetContainer: WidgetContainer;

    readonly resizeButton: Locator;

    readonly widgetCard: Locator;

    readonly footerSection: Locator;

    constructor(page: Page){
        this.page = page;
        this.dashboardTitle = this.page.locator('[class*="pageBreadcrumbs"] span[title]');
        this.widgetContainer = new WidgetContainer(this.page.locator('[class*="react-draggable"]'));
        this.footerSection = this.page.locator("footer[class*='footer']");    
    }


    async dragAndDropToTheRight (sliderButton, index: number) {
        await this.page.mouse.move(Number(sliderButton?.x) + Number(sliderButton?.width)/2, Number(sliderButton?.y) + Number(sliderButton?.height)/2); 
        await this.page.mouse.down();
        await this.page.mouse.move(Number(sliderButton?.x) + Number(sliderButton?.width)/2 + index, Number(sliderButton?.y) + Number(sliderButton?.height)/2);
        await this.page.mouse.up();
    }


    async dragAndDropToTheLeft (sliderButton, index: number) {
        await this.page.mouse.move(Number(sliderButton?.x) + Number(sliderButton?.width)/2, Number(sliderButton?.y) + Number(sliderButton?.height)/2); 
        await this.page.mouse.down();
        await this.page.mouse.move(Number(sliderButton?.x) + Number(sliderButton?.width)/2 - index, Number(sliderButton?.y) + Number(sliderButton?.height)/2);
        await this.page.mouse.up();
    }
}