import { test, expect } from "../pageObjects/PageFixture";
// import {test, expect} from "./pageObjects/PageFixture"
import testData from "../testData/formInput.json";

// let url = "file:///Users/amber/Documents/Testing/PlaywrightDemo/index.html";

test.describe("Testing Registration form", () => {
  test.beforeEach(
    "Go to registration form page",
    async ({ registrationPage }) => {
      await registrationPage.open();
    }
  );

  test("Validate page title", async ({ page }) => {
    await expect(page).toHaveTitle('Playwright Demo Page');
    // await page.locator("#apply-data").click({button: 'right'});

    // page.on('dialog', dialog =>{
    //   expect(dialog.type()).toEqual('alert|confirm|prompt');
    //   expect(dialog.message()).toBe('');
    //   dialog.accept();
    // })

    // const [popup] = await Promise.all([
    //   page.waitForEvent('popup'),
    //   page.click('#open-popup')
    // ]);
    // await page.waitForLoadState();
    // await page.close();

  });

  // test("Registration form test wrapper", async ({ registrationPage }) => {
  testData.forEach(async (data) => {
    // for (const data of Object.values(testData)) {
    if (data.testName) {
      test(data.testName, async ({ registrationPage }) => {
        await registrationPage.fillFirstName(data.firstName);
        await registrationPage.fillAge(data.age);
        await registrationPage.checkIsStudent(data.isStudent);
        await registrationPage.applyData();

        //   console.log(data.isStudent)
        if (data.age && data.firstName) {
          if (parseInt(data.age.trim()) <= 0) {
            expect(
              await registrationPage.getTextContent(
                registrationPage.invalidAgeError
              )
            ).toBe(data.expectedErrorText);
          } else {
            // let isStudent = await registrationPage.getTextContent(registrationPage.displayIsStudentLine);
            // console.log('1', isStudent);
            expect(
              await registrationPage.getTextContent(
                registrationPage.displayFirstNameLine
              )
            ).toBe(data.expectedFirstName);
            expect(
              await registrationPage.getTextContent(
                registrationPage.displayAgeLine
              )
            ).toBe(data.expectedAge);
            expect(
              await registrationPage.getTextContent(
                registrationPage.displayIsStudentLine
              )
            ).toBe(data.expectedIsStudent);
          }
        } else {
          expect(
            await registrationPage.getTextContent(
              registrationPage.emptyFieldError
            )
          ).toBe(data.expectedErrorText);
        }
      });
    }
    // }
  });
  // });
});
