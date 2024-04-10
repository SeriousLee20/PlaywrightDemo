import { Locator, Page } from "@playwright/test";
import { BasePage } from "@basePage";

export class JobPage extends BasePage{
    readonly homeButton: Locator;
    readonly departmentDropdown: Locator;

    constructor(page: Page){
        super(page);
        this.homeButton = page.getByRole('link', { name: 'ModeFair', exact: true });
        this.departmentDropdown = page.getByLabel('Department');
    }

    async backToHome(): Promise<void>{
        await this.homeButton.click();
    }

    async selectDepartment(department: string): Promise<void>{
        await this.departmentDropdown.selectOption(department);
    }


}