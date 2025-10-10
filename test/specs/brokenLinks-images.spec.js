import { expect } from 'chai';
import mainPage from '../pageobjects/main.page';
import { BASE_URL, BROKEN_LINKS_AND_IMAGES_URL } from '../config/urls';
import { browser, $ } from '@wdio/globals';
import { before } from 'mocha';
import elementsPage from '../pageobjects/elements.page';
import brokenLinksAndImagesPage from '../pageobjects/brokenLinksAndImages.page';

describe('Web Elements - Broken Links and Images', () => {

    before(async () => {
        await browser.url(BASE_URL);
        await browser.maximizeWindow();
    });

    it('Verify that the links icon redirects to the correct page', async () => {
        await mainPage.avatars[0].click();
        await elementsPage.elementsOptions[6].waitForDisplayed(5000);
        await elementsPage.elementsOptions[6].click();
        await browser.pause(1000);
        const url = await browser.getUrl();
        console.log(url);
        expect(await browser.getUrl()).to.equal(BROKEN_LINKS_AND_IMAGES_URL);
        await browser.pause(2000);
    });

    it('Verifies loading states of valid and broken images', async () => {
        const isValidLoaded = await browser.execute((el) => {
            return !!(el && el.complete && el.naturalWidth > 0 && el.naturalHeight > 0);
        }, await brokenLinksAndImagesPage.validImage[1]);

        const isBrokenLoaded = await browser.execute((el) => {
            return !!(el && el.complete && el.naturalWidth > 0 && el.naturalHeight > 0);
        }, await brokenLinksAndImagesPage.brokenImage);

        expect(isValidLoaded, 'Valid image should be loaded').to.equal(true);
        expect(isBrokenLoaded, 'Broken image should be loaded').to.equal(false);

    });

    it('Verify that the valid and broken link are working correctly', async () => {
        await brokenLinksAndImagesPage.validLink.waitForDisplayed();
        await brokenLinksAndImagesPage.validLink.click();
        expect(await browser.getUrl()).to.equal(BASE_URL + '/');
        await browser.back();
        await browser.pause(1000);
        
        await brokenLinksAndImagesPage.brokenLink.waitForDisplayed();
        await brokenLinksAndImagesPage.brokenLink.click();
        await browser.pause(1000);
        expect(await browser.getUrl()).to.include('https://the-internet.herokuapp.com/status_codes/500');
    });


});

