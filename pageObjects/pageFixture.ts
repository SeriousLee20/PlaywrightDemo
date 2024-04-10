import {test as baseTest} from '@playwright/test';
import { HomePage } from '@pages/HomePage';
import {ElementsPage} from '@pages/ElementsPage';
import { TextBoxPage } from '@pages/TextBoxPage';

type PageObjects = {
    homePage: HomePage,
    elementsPage: ElementsPage,
    textBoxPage: TextBoxPage
}

export const test = baseTest.extend<PageObjects>({
    homePage: async({page}, use)=>{
        const homePage = new HomePage(page);
        await use(homePage);
    },
    elementsPage: async({page}, use) => {
        const elementsPage = new ElementsPage(page);
        await use(elementsPage);
    },
    textBoxPage: async({page}, use) => {
        const textboxPage = new TextBoxPage(page);
        await use(textboxPage);
    }
});

export {Page, Locator, expect} from '@playwright/test';