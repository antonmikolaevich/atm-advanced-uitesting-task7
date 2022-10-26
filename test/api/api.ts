import { Page } from "@playwright/test";

export class Api {
    readonly page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }


    async mockingWidgets <T> (url: string, config: T) {
        await this.page.route(url, (route) =>
        route.fulfill({
            contentType: 'application/json',
            body: JSON.stringify(config),
            status: 200
        })
    )
    }





}