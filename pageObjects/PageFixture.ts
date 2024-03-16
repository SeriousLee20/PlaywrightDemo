import { test as base} from "@playwright/test";
import { RegistrationForm } from "./pages/RegistrationForm";

export type PageObjects = {
    registrationForm: RegistrationForm
}

export const test = base.extend<PageObjects>({
    registrationForm: async({page}, use) =>{
        const registrationForm = new RegistrationForm(page);
        await use(registrationForm);
    }
})

export {expect, Locator, Page, Response} from "@playwright/test";
