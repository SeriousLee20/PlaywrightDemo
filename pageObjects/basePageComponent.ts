import { Locator } from "@playwright/test";

export abstract class BasePageComponent {
  constructor(host: Locator) {}
}
