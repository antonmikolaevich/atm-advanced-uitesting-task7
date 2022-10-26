import { Locator } from "@playwright/test";
import { Element } from '../component/element'

export class WidgetContainer extends Element{
    readonly resizeButton: Locator;

    readonly legendSection: Locator;

    readonly headerSection: Locator;

    readonly widgetHeaderName: Locator;

    constructor(locator: Locator){
        super(locator)
        this.resizeButton = this.rootEl.locator('.react-resizable-handle');
        this.legendSection = this.rootEl.locator('[class*="legend__content"]');
        this.headerSection = this.rootEl.locator('[class*="draggable-field"]');
        this.widgetHeaderName = this.rootEl.locator('[class*="widget-header"] [class*="widget-name-block"]');
    }
}