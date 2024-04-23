import { test as base} from "@playwright/test";
import {RegistrationPage} from "./pages/RegistrationPage"

export type PageObjects = {
    registrationPage: RegistrationPage
}

export const test = base.extend<PageObjects>({
    registrationPage: async({page}, use) =>{
        const registrationPage = new RegistrationPage(page);
        await use(registrationPage);
    }
})

export {expect, Locator, Page, Response} from "@playwright/test";
