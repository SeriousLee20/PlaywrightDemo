import { expect, test } from "../pageObjects/PageFixture";

test.describe('Testing home page', () =>{
    test.beforeEach('Open home page', async({homePage}) =>{
        await homePage.open();
    });

    test('Testing home page to job page', async({page, homePage, jobPage}) => {
        await homePage.clickWhatWeDo();
        await homePage.clickCareer();
        await jobPage.selectDepartment('Engineering');
    })

    // test('Testing job page', async({})=>{

    // })
})
