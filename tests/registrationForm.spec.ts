import { test, expect } from "../pageObjects/PageFixture";
import * as testData from "../testData/formInput.json";

let url = "file:///Users/amber/Documents/Testing/PlaywrightDemo/index.html";

test.describe("Testing Registration form", () => {
  test.beforeEach(
    "Go to registration form page",
    async ({ registrationForm }) => {
      await registrationForm.open();
    }
  );

  test("Registration form test wrapper", async ({ registrationForm }) => {
    for (const data of Object.values(testData)) {
      if (data.testName) {
        await test.step(data.testName, async () => {
          await registrationForm.fillFirstName(data.firstName);
          await registrationForm.fillAge(data.age);
          await registrationForm.checkIsStudent(data.isStudent);
          await registrationForm.applyData();

        //   console.log(data.isStudent)
          if(data.age && data.firstName){
            if(parseInt(data.age.trim()) <= 0){
                expect(await registrationForm.getTextContent(registrationForm.invalidAgeError)).toBe(data.expectedErrorText);
            }else{
                let isStudent = await registrationForm.getTextContent(registrationForm.displayIsStudentSelector);
                console.log('1', isStudent);
                expect(await registrationForm.getTextContent(registrationForm.displayFirstNameSelector)).toBe(data.expectedFirstName);
                expect(await registrationForm.getTextContent(registrationForm.displayAgeSelector)).toBe(data.expectedAge);
                expect(await registrationForm.getTextContent(registrationForm.displayIsStudentSelector)).toBe(data.expectedIsStudent);
            }
          }else{
            expect(await registrationForm.getTextContent(registrationForm.emptyFieldError)).toBe(data.expectedErrorText);
          }
        });
      }
    }
  });
});

