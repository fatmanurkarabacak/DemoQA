import { expect } from 'chai';
import mainPage from '../pageobjects/main.page';
import { ELEMENTS_URL, BASE_URL, CHECKBOX_URL } from '../config/urls';
import { browser } from '@wdio/globals';
import { before } from 'mocha';
import elementsPage from '../pageobjects/elements.page';

describe('Web Elements - Checkbox', () => {

    before(async () => {
        await browser.url(BASE_URL);
        await browser.maximizeWindow();

    });

    it('Verify that the checkbox icon redirects to the correct page', async () => {
        await mainPage.avatars[0].click();
        await elementsPage.elementsOptions[1].waitForDisplayed(5000);
        await elementsPage.elementsOptions[1].click();
        expect(await browser.getUrl()).to.equal(CHECKBOX_URL);
    });

    it('Verify that the checkbox is checked', async () => {
        await elementsPage.checkboxes[0].waitForDisplayed();
        await elementsPage.checkboxes[0].click();
        //expect(await elementsPage.checkboxes[0].isSelected()).to.be.true, 'Checkbox should be selected!';
        expect(await elementsPage.checkboxesChecked[0].getAttribute('class')).to.include('rct-icon-check'), 'Checkbox should be checked!';
        await elementsPage.checkboxesChecked[0].click();

    });

    it('Verify that the more than one checkbox is checked', async () => {
        await elementsPage.toggleButton[0].waitForDisplayed();
        await elementsPage.toggleButton[0].click();
        await elementsPage.checkboxes[1].waitForDisplayed();
        await elementsPage.checkboxes[1].click();
        await elementsPage.checkboxes[0].waitForDisplayed();
        await elementsPage.checkboxes[0].click();
        await elementsPage.checkboxes[0].waitForDisplayed();
        await elementsPage.checkboxes[0].click();
        expect(await elementsPage.checkboxesChecked[0].getAttribute('class')).to.include('rct-icon-check'), 'Checkbox should be checked!';
        expect(await elementsPage.checkboxesChecked[1].getAttribute('class')).to.include('rct-icon-check'), 'Checkbox should be checked!';
        expect(await elementsPage.checkboxesChecked[2].getAttribute('class')).to.include('rct-icon-check'), 'Checkbox should be checked!';
        expect(await elementsPage.checkboxesChecked[3].getAttribute('class')).to.include('rct-icon-check'), 'Checkbox should be checked!';
        await elementsPage.checkboxesChecked[0].waitForDisplayed();
        await elementsPage.checkboxesChecked[0].click();
    });

    it('Verify that selected fields are listed', async () => {
        await elementsPage.toggleButton[3].waitForDisplayed();
        await elementsPage.toggleButton[3].click();
        expect(await elementsPage.checkboxes[4].isDisplayed()).to.be.true, 'Folder opening operation failed!';
        expect(await elementsPage.checkboxes[4].isDisplayed()).to.be.true, 'Folder opening operation failed!';
        await elementsPage.checkboxes[5].click();
        expect(await elementsPage.checkboxesChecked[0].getAttribute('class')).to.include('rct-icon-check'), 'Excel file checkbox should be checked!';
        await elementsPage.selectedList.waitForDisplayed();
        expect(await elementsPage.selectedList.getText()).to.equal('excelFile'), 'Selected file is not displayed in the list';
    });

});

