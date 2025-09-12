import { expect } from 'chai';
import mainPage from '../pageobjects/main.page';
import { ELEMENTS_URL, BASE_URL } from '../config/urls';

describe('Web Elements', () => {

    before(async () => {
        await browser.url(BASE_URL);
    });

    it('verify that the Elements icon redirects to the correct page', async () => {
        await mainPage.avatars.click();
        expect(await browser.getUrl()).to.equal(ELEMENTS_URL);
    });

    
});

