import { Locator, Page } from "@playwright/test";

export class Input {

    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async fillInput(locator: Locator, value: string){
        await locator.fill(value);
    }

    async setInputValue(selector: string, value: string){
        await this.page.locator(selector).fill(value);
    }

    async setInputByPlaceholder(placeholder: string, value: string){
        await this.page.getByPlaceholder(placeholder).fill(value);
    }

    async setInputValueByRole(role: any, name: string, value: string){
        await this.page.getByRole(role, {name: name}).fill(value);
    }
}