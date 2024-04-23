import { Page } from "@playwright/test";

export class SideMenu {
  readonly elements = {
    textBox: 'Text Box',
    checkBox: 'Check Box',
    radioButton: 'Radio Button',
    webTables: 'Web Tabbles',
    buttons: 'Buttons',
    links: 'Links',
    brokenLinksImage: 'Broken Links - Images',
    uploadAndDownload: 'Upload and Download',
    dynamicProperties: 'Dynamic Properties',
    practiceForm: 'Practice Form',
    browserWindows: 'Browser Windows',
    alerts: 'Alerts',
    frames: 'Frames',
    nestedFrames: 'Nested Frames',
    modalDialogs: 'Modal Dialogs',
    accordian: 'Accordian',
    autoComplete: 'autoComplete',
    datePicker: 'datePicker',
    slider: 'Slider',
    progressBar: 'Progress Bar',
    tabs: 'Tabs',
    toolTips: 'Tool Tips',
    menu: 'Menu',
    selectMenu: 'Select Menu',
    sortable: 'Sortable',
    selectable: 'Selectable',
    resizable: 'Resizable',
    droppable: 'Droppable',
    dragabble: 'Dragabble',
    login: 'Login',
    bookStore: 'Book Store',
    profile: 'Profile',
    bookStoreAPI: 'Book Store API'
  }

  constructor(private readonly page: Page) {}

  async selectSideMenuItem(itemName: string) {
    await this.page.locator("li").filter({ hasText: "Text Box" }).click();
  }

  async selectSideMenuItemByHasLocator(itemName: string) {
    await this.page
      .locator(".btn", { has: this.page.getByText(itemName) })
      .click();
  }

  async selectSideMenuItemByXPath(itemName: string) {
    // await page.locator("//ul[@class='menu-list']//li[span[text()='Text Box']]").click();
    // await page.locator("//li[contains(@class, 'btn')][span[text()='Text Box']]").click();

    await this.page
      .locator(`//li[contains(@class, 'btn')][span[text()='${itemName}']]`)
      .click();
  }
}
