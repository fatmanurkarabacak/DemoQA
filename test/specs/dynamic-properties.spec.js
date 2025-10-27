import { expect } from 'chai';
import mainPage from '../pageobjects/main.page';
import { BASE_URL } from '../config/urls';
import { browser, $ } from '@wdio/globals';
import { before } from 'mocha';
import elementsPage from '../pageobjects/elements.page';
import { DYNAMIC_PROPERTIES_URL } from '../config/urls';
import dynamicPropertiesPage from '../pageobjects/dynamicProperties.page';

describe('Web Elements - Dynamic Properties', () => {

    before(async () => {
        await browser.url(BASE_URL);
        await browser.maximizeWindow();
    });

    it('Verify that the dynamic-properties icon redirects to the correct page', async () => {
        await mainPage.avatars[0].click();
        await elementsPage.elementsOptions[8].waitForDisplayed(5000);
        await elementsPage.elementsOptions[8].click();
        await browser.pause(1000);
        const url = await browser.getUrl();
        console.log(url);
        expect(await browser.getUrl()).to.equal(DYNAMIC_PROPERTIES_URL);
        await browser.pause(2000);
    });

    it('Verify that the element ID changes on reload', async () => {
    
        const firstId = await $('//p[contains(text(),"This text has random Id")]').getAttribute('id');
        await browser.refresh();
        const secondId = await $('//p[contains(text(),"This text has random Id")]').getAttribute('id');
    
        expect(firstId).not.equal(secondId), "Element ID does not change when page is refreshed!";
    });

    it('Verify that the button is enabled after 5 seconds', async () => {
    
    
        const isInitiallyEnabled = await dynamicPropertiesPage.enableAfter.isEnabled();
        expect(isInitiallyEnabled).to.be.false;
    
        await browser.pause(5000);
    
        const isEnabledAfterDelay = await dynamicPropertiesPage.enableAfter.isEnabled();
        expect(isEnabledAfterDelay).to.be.true;
    });

    it('Verify that the button color changes after 5 seconds', async () => {
    
    
        const initialColor = await dynamicPropertiesPage.colorChange.getAttribute('class');

        expect(initialColor).to.include('btn-primary');

        await browser.pause(5000);

        const newColor = await dynamicPropertiesPage.colorChange.getAttribute('class');
        expect(newColor).to.include('text-danger');
    });

    it('Verify that the button is visible after 5 seconds', async () => {
        await browser.refresh();
        const isInitiallyVisible = await dynamicPropertiesPage.visibleAfter.isDisplayed();
        expect(isInitiallyVisible).to.be.false;

        await browser.pause(5000);

        const isVisibleAfterDelay = await dynamicPropertiesPage.visibleAfter.isDisplayed();
        expect(isVisibleAfterDelay).to.be.true, "Button is not visible after 5 seconds!";
    

    });
    
    
    



    


});

