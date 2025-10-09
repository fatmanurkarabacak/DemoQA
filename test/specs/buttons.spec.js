import { expect } from 'chai';
import mainPage from '../pageobjects/main.page';
import { BASE_URL, BUTTONS_URL } from '../config/urls';
import { browser } from '@wdio/globals';
import { before } from 'mocha';
import elementsPage from '../pageobjects/elements.page';
import buttonsPage from '../pageobjects/buttons.page';

describe('Web Elements - Buttons', () => {

    before(async () => {
        await browser.url(BASE_URL);
        await browser.maximizeWindow();
    });

    it('Verify that the buttons icon redirects to the correct page', async () => {
        await mainPage.avatars[0].click();
        await elementsPage.elementsOptions[4].waitForDisplayed(5000);
        await elementsPage.elementsOptions[4].click();
        expect(await browser.getUrl()).to.equal(BUTTONS_URL);
    });

    it('Verify that the double click button is working', async () => {
        await buttonsPage.doubleClickButton.waitForDisplayed();
        await buttonsPage.doubleClickButton.doubleClick();
        expect(await buttonsPage.doubleClickMessage.isDisplayed()).to.be.true, 'Double click button is not working!';
    });

    it('Verify that the right click button is working', async () => {
        await buttonsPage.rightClickButton.waitForDisplayed();
        await browser.pause(1000);
        const rightClickBtn = await buttonsPage.rightClickButton;
        await rightClickBtn.click({ button: 'right' });
        await browser.pause(1000);
        expect(await buttonsPage.rightClickMessage.isDisplayed()).to.be.true, 'Right click button is not working!';
    });

    it('Verify that the click me button is working', async () => {
        //await buttonsPage.clickMeButton.waitForDisplayed();
        await browser.pause(1000);
        const dynamicBtn = await $('//button[text()="Click Me"]');
        await dynamicBtn.click();
        await browser.pause(1000);
        expect(await buttonsPage.clickMeMessage.isDisplayed()).to.be.true, 'Click me button is not working!';
    });

    
});

