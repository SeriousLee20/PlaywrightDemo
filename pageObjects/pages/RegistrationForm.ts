import { Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Env } from "../../tests/config/Env";

export class RegistrationForm extends BasePage {
  private button: Button;
  private input: Input;

  readonly firstNameInputPlaceholder = `Please enter your first name`;
  readonly ageInputSelector = "(//input[@id='age'])[1]";
  readonly isStudentCheckboxSelector = "#is-student";
  readonly applyDataButton = "#apply-data";
  readonly displayFirstNameSelector = "#display-first-name";
  readonly displayAgeSelector = "#display-age";
  readonly displayIsStudentSelector = "#display-is-student";
  readonly emptyFieldError = "#empty-field-error > p";
  readonly invalidAgeError = "#invalid-age-error > p";

  constructor(page: Page) {
    super(page);
    this.button = new Button(page);
    this.input = new Input(page);
  }

  // async open(url: string): Promise<void> {
  //   await this.page.goto(url);
  // }

  async open(): Promise<void> {
    await this.page.goto(Env.BASE_URL);
  }
  async applyData(): Promise<void> {
    await this.button.clickButton(this.applyDataButton);
  }

  async fillFirstName(firstName: string): Promise<void> {
    await this.input.setInputByPlaceholder(
      this.firstNameInputPlaceholder,
      firstName
    );
  }

  async fillAge(age: string): Promise<void> {
    await this.input.setInputValue(this.ageInputSelector, age);
  }

  async checkIsStudent(isStudent: boolean): Promise<void> {
    if (isStudent) {
      await this.page.locator(this.isStudentCheckboxSelector).check();
    } else{
      await this.page.locator(this.isStudentCheckboxSelector).uncheck();
    }
  }

  async getTextContent(selector: string): Promise<string | null> {
    let textContent = await this.page.locator(selector).textContent();
    return textContent ?? null;
  }

  async timeout(ms: number): Promise<void> {
    await this.page.waitForTimeout(ms);
  }
}
