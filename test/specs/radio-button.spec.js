import { expect } from 'chai';
import mainPage from '../pageobjects/main.page';
import { BASE_URL, RADIO_BUTTON_URL } from '../config/urls';
import { browser } from '@wdio/globals';
import { before } from 'mocha';
import elementsPage from '../pageobjects/elements.page';


describe('Web Elements - Radio Button', () => {

    before(async () => {
        await browser.url(BASE_URL);
        await browser.maximizeWindow();
    });

    it('Verify that the radio-button icon redirects to the correct page', async () => {
        await mainPage.avatars[0].click();
        await elementsPage.elementsOptions[2].waitForDisplayed(5000);
        await elementsPage.elementsOptions[2].click();
        expect(await browser.getUrl()).to.equal(RADIO_BUTTON_URL);
    });

    it('Verify that the radio button is selectable', async () => {
        await elementsPage.yesRadioButton.waitForDisplayed();
        await elementsPage.yesRadioButton.click();
        await elementsPage.selectedRadioButton.waitForDisplayed();
        expect(await elementsPage.selectedRadioButton.getText()).to.equal('Yes'), 'Radio button "Yes" should be selected!';

        await elementsPage.impressiveRadioButton.waitForDisplayed();
        await elementsPage.impressiveRadioButton.click();
        await elementsPage.selectedRadioButton.waitForDisplayed();
        expect(await elementsPage.selectedRadioButton.getText()).to.equal('Impressive'), 'Radio button "Impressive" should be selected!';
    });

    it('Verify that only one option can be selected at a time', async () => {
        await elementsPage.yesRadioButton.waitForDisplayed();
        await elementsPage.yesRadioButton.click();
        expect(await elementsPage.selectedRadioButton.getText()).to.equal('Yes'), 'Radio button "Yes" seçili olmalı!';

        await elementsPage.impressiveRadioButton.waitForDisplayed();
        await elementsPage.impressiveRadioButton.click();
        expect(await elementsPage.selectedRadioButton.getText()).to.equal('Impressive'), 'Radio button "Impressive" seçili olmalı!';
        expect(await elementsPage.selectedRadioButton.getText()).to.not.equal('Yes'), 'Radio button "Yes" seçili olmamalı!';
    });

    it('Verify that the "No" option is disabled and not clickable', async () => {
        await elementsPage.noRadioButton.waitForDisplayed();
        const noRadioClass = await elementsPage.noRadioButton.getAttribute('class');
        expect(noRadioClass).to.include('disabled');
        //expect(await elementsPage.noRadioButton.isClickable()).to.be.false;
        //expect(await elementsPage.noRadioButton.isEnabled()).to.be.false;
        await elementsPage.noRadioButton.click();
        expect(await elementsPage.selectedRadioButton.getText()).to.not.equal('No'), 'Radio button "No" seçili olmamalı!';
    });
    
});

