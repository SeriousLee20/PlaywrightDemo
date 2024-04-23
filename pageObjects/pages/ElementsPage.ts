import { Locator, Page } from "@playwright/test";
import { SideMenu } from "@components/SideMenu";
import { BasePage } from "@basePage";

export class ElementsPage extends BasePage{
    private sideMenu: SideMenu;

    constructor(readonly page: Page){
        super(page);
        this.sideMenu = new SideMenu(page);
    }

     getSideMenu(){
        return this.sideMenu;
    }
}