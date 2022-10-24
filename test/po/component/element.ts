import { Locator } from "@playwright/test";

export class Element {
    readonly rootEl: Locator;
  
    constructor(locator: Locator) {
      this.rootEl = locator;
    }

}