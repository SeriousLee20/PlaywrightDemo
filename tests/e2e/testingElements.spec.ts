import { test, expect } from "@pageFixture";
import { getTextboxData } from "testData/textboxData";

test.describe('Testing DEMOQA', () => {
    test.beforeEach('Open homepage', async ({homePage}) =>{
        await homePage.open();
    })

    test('Testing textbox', async({homePage, elementsPage, textBoxPage}) => {
        let elements = elementsPage.getSideMenu().elements;

        await homePage.selectComponent(homePage.components.elements);
        await elementsPage.getSideMenu().selectSideMenuItemByXPath(elements.textBox);
        await textBoxPage.fillAllFields(getTextboxData());

    })
})