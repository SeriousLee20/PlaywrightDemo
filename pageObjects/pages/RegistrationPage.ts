import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Env } from "../../tests/config/Env";
// import { RegistrationForm } from "../components/RegistrationForm";

export class RegistrationPage extends BasePage {
  private button: Button;
  private input: Input;
//   private registrationForm: RegistrationForm;

  readonly firstNameTextbox: Locator;
  readonly ageTextbox: Locator;
  readonly isStudentCheckbox: Locator;
  readonly applyDataButton: Locator;
  readonly displayFirstNameLine: Locator;
  readonly displayAgeLine: Locator;
  readonly displayIsStudentLine: Locator;
  readonly emptyFieldError: Locator;
  readonly invalidAgeError: Locator;

  //   readonly firstNameInputPlaceholder = `Please enter your first name`;
    // readonly ageInputSelector = "(//input[@id='age'])[1]";
    // readonly isStudentCheckboxSelector = "#is-student";
    // readonly applyDataButton = "#apply-data";
    // readonly displayFirstNameSelector = "#display-first-name";
    // readonly displayAgeSelector = "#display-age";
    // readonly displayIsStudentSelector = "#display-is-student";
    // readonly emptyFieldError = "#empty-field-error > p";
    // readonly invalidAgeError = "#invalid-age-error > p";

  constructor(page: Page) {
    super(page);
    // this.registrationForm = new RegistrationForm(page);
    this.button = new Button(page);
    this.input = new Input(page);
    this.firstNameTextbox = page.getByPlaceholder(
      /Please enter your first name/i
    );
    this.ageTextbox = page.getByRole("spinbutton", { name: /Age/i });
    this.isStudentCheckbox = page.getByRole("checkbox", { name: /Student/i });
    this.applyDataButton = page.getByRole("button", { name: /Apply/i });
    this.displayFirstNameLine = page.locator("[id=display-first-name]");
    this.displayAgeLine = page.locator("[id=display-age]");
    this.displayIsStudentLine = page.locator("[id=display-is-student]");
    this.emptyFieldError = page
      .locator("#empty-field-error p")
    //   .getByRole("paragraph", { name: /Please fill in all fields/i });
    this.invalidAgeError = page
      .locator("#invalid-age-error p")
    //   .getByRole("paragraph", { name: /Invalid age/i });
  }

  // async open(url: string): Promise<void> {
  //   await this.page.goto(url);
  // }

  async open(): Promise<void> {
    await this.page.goto(Env.BASE_URL);
  }

  async applyData(): Promise<void> {
    // await this.button.clickButton(this.applyDataButton);
    await this.applyDataButton.click();
  }

  async fillFirstName(firstName: string): Promise<void> {
    // await this.input.setInputByPlaceholder(
    //   this.firstNameInputPlaceholder,
    //   firstName
    // );

    // await this.input.setInputValueByRole('textbox', 'First Name:', firstName);
    // await this.registrationForm.firstNameTextbox.fill(firstName);
    await this.firstNameTextbox.fill(firstName);
  }

  async fillAge(age: string): Promise<void> {
    // await this.input.setInputValue(this.ageInputSelector, age);
    // await this.input.setInputValueByRole("spinbutton", "Age:", age);
    await this.ageTextbox.fill(age);
  }

  async checkIsStudent(isStudent: boolean): Promise<void> {
    if (isStudent) {
    //   await this.page.locator(this.isStudentCheckboxSelector).check();
      await this.isStudentCheckbox.check();
    } else {
    //   await this.page.locator(this.isStudentCheckboxSelector).uncheck();
      await this.isStudentCheckbox.uncheck();
    }
  }

  async getTextContent(locator: Locator): Promise<string | null> {
    // let textContent = await this.page.locator(selector).textContent();
    let textContent = await locator.textContent();
    return textContent ?? null;
  }

  async timeout(ms: number): Promise<void> {
    await this.page.waitForTimeout(ms);
  }
}
