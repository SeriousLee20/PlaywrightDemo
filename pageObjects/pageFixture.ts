import {test as baseTest} from '@playwright/test';
import { HomePage } from './pages/homePage';
import { JobPage } from './pages/jobPage';

type PageObjects = {
    homePage: HomePage,
    jobPage: JobPage
}

export const test = baseTest.extend<PageObjects>({
    homePage: async({page}, use)=>{
        const homePage = new HomePage(page);
        await use(homePage);
    },
    jobPage: async({page}, use) => {
        const jobPage = new JobPage(page);
        await use(jobPage);
    }
});

export {Page, Locator, expect} from '@playwright/test';