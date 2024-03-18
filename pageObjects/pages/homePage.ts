import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class HomePage extends BasePage{
    readonly menuButton: Locator;
    readonly whatWeDoButton: Locator;
    readonly partnersButton: Locator;
    readonly aboutButton: Locator;
    readonly careersButton: Locator;
    readonly getInTouchButton: Locator;

    constructor(page: Page){
        super(page);
        this.menuButton = page.getByLabel(/Main menu/i);
        this.whatWeDoButton = page.getByRole('link', {name: /What we do/i});
        this.careersButton = page.getByRole('link', {name: /Careers/i});
    }

    async open(): Promise<void> {
        await this.page.goto('/');
    }

    async openMenu(): Promise<void>{
        await this.menuButton.click();
    }

    async clickWhatWeDo(): Promise<void>{
        await this.whatWeDoButton.click();
    }

    async clickCareer(): Promise<void>{
        await this.careersButton.click();
    }
}