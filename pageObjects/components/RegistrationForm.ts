import { Page } from "@playwright/test";
import { BasePageComponent } from "../BasePageComponent";

export class RegistrationForm extends BasePageComponent {
  private page: Page;
  readonly firstNameTextbox = this.host.getByPlaceholder(/Please enter your first name/i);
  readonly ageTextbox = this.host.getByRole("spinbutton", {name: /Age/i });
  readonly isStudentCheckbox = this.host.getByRole("checkbox", {name: /Student/i});
  readonly applyDataButton = this.host.getByRole("button", {name: /Apply/i});
  readonly displayFirstNameLine = this.host.locator('[id=display-first-name]');
  readonly displayAgeLine = this.host.locator('[id=display-age]');
  readonly displayIsStudentLine = this.host.locator('[id=display-is-student]');
  readonly emptyFieldError = this.host.locator('[id=empty-field-error]').getByRole("paragraph", {name: /Please fill in all fields/i});
  readonly invalidFieldError = this.host.locator('[id=invalid-age-error]').getByRole("paragraph", {name: /Invalid age/i});

  constructor(page: Page, locator = page.locator("#registration-form")){
    super(locator);
  }

}
