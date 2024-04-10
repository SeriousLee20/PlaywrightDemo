import { BasePage } from "@basePage";
import { Page } from "@playwright/test";
import { textboxData } from "testData/textboxData";

export class TextBoxPage extends BasePage{
    constructor(readonly page: Page){
        super(page);
    }

    async getTextbox(placeholder: string, value: string){
        return this.page.getByPlaceholder(placeholder).fill(value);
    }

    async fillAllFields(data: textboxData){
        await this.getTextbox('Full Name', data.fullName);
        await this.getTextbox('name@example.com', data.email);
        await this.getTextbox('Current Address', data.currentAddress);
        await this.page.locator('#permanentAddress').fill(data.permanentAddress);

    }

}