import { expect } from 'chai';
import mainPage from '../pageobjects/main.page';
import { ELEMENTS_URL, BASE_URL, RADIO_BUTTON_URL } from '../config/urls';
import { browser } from '@wdio/globals';
import { before } from 'mocha';
import elementsPage from '../pageobjects/elements.page.spec';


describe('Web Elements - Radio Button', () => {

    before(async () => {
        await browser.url(BASE_URL);
        await browser.maximizeWindow();
    });

    it('Verify that the radio-button icon redirects to the correct page', async () => {
        await mainPage.avatars[0].click();
        await elementsPage.elementsOptions[1].waitForDisplayed(5000);
        await elementsPage.elementsOptions[1].click();
        expect(await browser.getUrl()).to.equal(RADIO_BUTTON_URL);
    });

    

});

