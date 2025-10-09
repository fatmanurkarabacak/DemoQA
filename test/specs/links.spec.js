import { expect } from 'chai';
import mainPage from '../pageobjects/main.page';
import { BASE_URL, LINKS_URL } from '../config/urls';
import { browser } from '@wdio/globals';
import { before } from 'mocha';
import elementsPage from '../pageobjects/elements.page';

describe('Web Elements - Links', () => {

    before(async () => {
        await browser.url(BASE_URL);
        await browser.maximizeWindow();
    });

    it('Verify that the links icon redirects to the correct page', async () => {
        await mainPage.avatars[0].click();
        await elementsPage.elementsOptions[5].waitForDisplayed(5000);
        await elementsPage.elementsOptions[5].click();
        expect(await browser.getUrl()).to.equal(LINKS_URL);
    });

   
    
});

