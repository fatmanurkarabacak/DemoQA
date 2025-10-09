import { expect } from 'chai';
import mainPage from '../pageobjects/main.page';
import { BASE_URL, ELEMENTS_URL } from '../config/urls';
import { browser } from '@wdio/globals';
import { before } from 'mocha';
import elementsPage from '../pageobjects/elements.page';
import { NAME, EMAIL, CURRENT_ADDRESS, PERMANENT_ADDRESS, INVALID_EMAIL } from '../config/userInformationData';


describe('Web Elements - Text Box', () => {

    before(async () => {
        await browser.url(BASE_URL);
    });

    it('Verify that the Elements icon redirects to the correct page', async () => {
        await mainPage.avatars[0].click();
        expect(await browser.getUrl()).to.equal(ELEMENTS_URL);
        await browser.maximizeWindow();
    });

    it('Verify that all fields are correctly filled out and submitted', async () => {
        await elementsPage.elementsOptions[0].waitForDisplayed();
        await elementsPage.elementsOptions[0].click();
        await elementsPage.fullNameInput.waitForDisplayed();
        await elementsPage.fullNameInput.setValue(NAME);
        await elementsPage.emailInput.waitForDisplayed();
        await elementsPage.emailInput.click();
        await elementsPage.emailInput.setValue(EMAIL);
        await elementsPage.currentAddressInput.waitForDisplayed();
        await elementsPage.currentAddressInput.setValue(CURRENT_ADDRESS);
        await elementsPage.permanentAddressInput.waitForDisplayed();
        await elementsPage.permanentAddressInput.setValue(PERMANENT_ADDRESS);
        await elementsPage.submitButton.waitForDisplayed();
        await elementsPage.submitButton.click();

        await elementsPage.nameOutput.waitForDisplayed();
        expect(await elementsPage.nameOutput.getText()).to.equal('Name:' + NAME);
        await elementsPage.emailOutput.waitForDisplayed();
        expect(await elementsPage.emailOutput.getText()).to.equal('Email:' + EMAIL);
        await elementsPage.currentAddressOutput.waitForDisplayed();
        expect(await elementsPage.currentAddressOutput.getText()).to.equal('Current Address :' + CURRENT_ADDRESS);
        await elementsPage.permanentAddressOutput.waitForDisplayed();
        expect(await elementsPage.permanentAddressOutput.getText()).to.equal('Permananet Address :' + PERMANENT_ADDRESS);
    });

    it('Verify the systems behavior when an invalid email format is entered', async () => {
        await elementsPage.emailInput.waitForDisplayed();
        await elementsPage.emailInput.setValue(INVALID_EMAIL);
        await elementsPage.submitButton.waitForDisplayed();
        await elementsPage.submitButton.click();
        await elementsPage.emailInput.waitForDisplayed();
        expect(await elementsPage.emailInput.getAttribute('class')).to.include('field-error'), 'Email input should have red alert!';
    });
});

