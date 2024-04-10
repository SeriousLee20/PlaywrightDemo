import { Locator, Page } from "@playwright/test";
import { BasePage } from "@basePage";

export class HomePage extends BasePage{

    readonly components = {
        elements: /^Elements$/,
        forms: /^Forms$/,
        alerts: /Alerts/,
        widgets: /Widgets/,
        interactions: /Interactions/,
        bookStore: /Book store/
    }

    constructor(page: Page){
        super(page);
    }

    async open(): Promise<void> {
        await this.page.goto('/');
    }

    async selectComponent(component: RegExp): Promise<void>{
        await this.page.locator('.card').filter({hasText: component}).click();
    }



}