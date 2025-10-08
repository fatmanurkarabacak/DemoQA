import { expect } from 'chai';
import mainPage from '../pageobjects/main.page';
import { BASE_URL, WEB_TABLES_URL } from '../config/urls';
import { browser } from '@wdio/globals';
import { before } from 'mocha';
import elementsPage from '../pageobjects/elements.page.spec';
import webTablesPage from '../pageobjects/web-tables.page.spec';
import { EMAIL, AGE, LASTNAME, SALARY, DEPARTMENT, FIRSTNAME } from '../config/userInformationData';


describe('Web Elements - Web Tables', () => {

    before(async () => {
        await browser.url(BASE_URL);
        await browser.maximizeWindow();
    });

    it('Verify that the web-tables icon redirects to the correct page', async () => {
        await mainPage.avatars[0].click();
        await elementsPage.elementsOptions[3].waitForDisplayed(5000);
        await elementsPage.elementsOptions[3].click();
        expect(await browser.getUrl()).to.equal(WEB_TABLES_URL);
    });

    it('Verify that the adding a new user is successful', async () => {
        await webTablesPage.addButton.waitForDisplayed();
        await webTablesPage.addButton.click();
        await webTablesPage.firstNameInput.waitForDisplayed();
        await webTablesPage.firstNameInput.setValue(FIRSTNAME);
        await webTablesPage.lastNameInput.waitForDisplayed();
        await webTablesPage.lastNameInput.setValue(LASTNAME);
        await webTablesPage.emailInput.waitForDisplayed();
        await webTablesPage.emailInput.setValue(EMAIL);
        await webTablesPage.ageInput.waitForDisplayed();
        await webTablesPage.ageInput.setValue(AGE);
        await webTablesPage.salaryInput.waitForDisplayed();
        await webTablesPage.salaryInput.setValue(SALARY);
        await webTablesPage.departmentInput.waitForDisplayed();
        await webTablesPage.departmentInput.setValue(DEPARTMENT);
        await webTablesPage.submit.waitForDisplayed();
        await webTablesPage.submit.click();

        await webTablesPage.searchInput.waitForDisplayed();
        await webTablesPage.searchInput.click();
        await webTablesPage.searchInput.setValue(FIRSTNAME);
        await webTablesPage.searchButton.waitForDisplayed();
        await webTablesPage.searchButton.click();
        await browser.pause(1000);

        //verify that the user is added and user information is correct
        await webTablesPage.gridCells[0].waitForDisplayed();
        expect(await webTablesPage.gridCells[0].getText()).to.equal(FIRSTNAME),'User name is not matching!';
        await webTablesPage.gridCells[1].waitForDisplayed();
        expect(await webTablesPage.gridCells[1].getText()).to.equal(LASTNAME),'User last name is not matching!';
        await webTablesPage.gridCells[2].waitForDisplayed();
        expect(await webTablesPage.gridCells[2].getText()).to.equal(AGE),'User age is not matching!';
        await webTablesPage.gridCells[3].waitForDisplayed();
        expect(await webTablesPage.gridCells[3].getText()).to.equal(EMAIL),'User email is not matching!';
        await webTablesPage.gridCells[4].waitForDisplayed();
        expect(await webTablesPage.gridCells[4].getText()).to.equal(SALARY),'User salary is not matching!';
        await webTablesPage.gridCells[5].waitForDisplayed();
        expect(await webTablesPage.gridCells[5].getText()).to.equal(DEPARTMENT),'User department is not matching!';
        
    });

    it('Verify that the editing a user information is successful', async () => {
        
        //Verify that the user's name is editable.
        await webTablesPage.editButton.waitForDisplayed(); //butonu görmüyor.
        await webTablesPage.editButton.click();
        await webTablesPage.firstNameInput.waitForDisplayed();
        await webTablesPage.firstNameInput.clearValue();
        await webTablesPage.firstNameInput.setValue('Michelle');
        await webTablesPage.submit.waitForDisplayed();
        await webTablesPage.submit.click();
        await browser.pause(1000);
        await webTablesPage.searchInput.waitForDisplayed();
        await webTablesPage.searchInput.click();
        await webTablesPage.searchInput.setValue('Michelle');
        await webTablesPage.searchButton.waitForDisplayed();
        await webTablesPage.searchButton.click();
        await browser.pause(1000);
        await webTablesPage.gridCells[0].waitForDisplayed();
        expect(await webTablesPage.gridCells[0].getText()).to.equal('Michelle'),'User name is not edited!';

        //Verify that the user's surname is editable.
        await webTablesPage.editButton.waitForDisplayed();
        await webTablesPage.editButton.click();
        await webTablesPage.lastNameInput.waitForDisplayed();
        await webTablesPage.lastNameInput.clearValue();
        await webTablesPage.lastNameInput.setValue('Obamax');
        await webTablesPage.submit.waitForDisplayed();
        await webTablesPage.submit.click();
        await webTablesPage.searchInput.waitForDisplayed();
        await webTablesPage.searchInput.click();
        await webTablesPage.searchInput.setValue('Obamax');
        await webTablesPage.searchButton.waitForDisplayed();
        await webTablesPage.searchButton.click();
        await browser.pause(1000);
        await webTablesPage.gridCells[1].waitForDisplayed();
        expect(await webTablesPage.gridCells[1].getText()).to.equal('Obamax'),'User last name is not edited!';

        //Verify that the user's email is editable.
        await webTablesPage.editButton.waitForDisplayed();
        await webTablesPage.editButton.click();
        await webTablesPage.emailInput.waitForDisplayed();
        await webTablesPage.emailInput.clearValue();
        await webTablesPage.emailInput.setValue('obama@example.com');
        await webTablesPage.submit.waitForDisplayed();
        await webTablesPage.submit.click();
        await webTablesPage.searchInput.waitForDisplayed();
        await webTablesPage.searchInput.click();
        await webTablesPage.searchInput.setValue('obama@example.com');
        await webTablesPage.searchButton.waitForDisplayed();
        await webTablesPage.searchButton.click();
        await browser.pause(1000);
        await webTablesPage.gridCells[3].waitForDisplayed();
        expect(await webTablesPage.gridCells[3].getText()).to.equal('obama@example.com'),'User email is not edited!';

        //Verify that the user's age is editable.
        await webTablesPage.editButton.waitForDisplayed();
        await webTablesPage.editButton.click();
        await webTablesPage.ageInput.waitForDisplayed();
        await webTablesPage.ageInput.clearValue();
        await webTablesPage.ageInput.setValue('47');
        await webTablesPage.submit.waitForDisplayed();
        await webTablesPage.submit.click();
        await webTablesPage.searchInput.waitForDisplayed();
        await webTablesPage.searchInput.click();
        await webTablesPage.searchInput.setValue('47');
        await webTablesPage.searchButton.waitForDisplayed();
        await webTablesPage.searchButton.click();
        await browser.pause(1000);
        await webTablesPage.gridCells[2].waitForDisplayed();
        expect(await webTablesPage.gridCells[2].getText()).to.equal('47'),'User age is not edited!';

        //Verify that the user's salary is editable.
        await webTablesPage.editButton.waitForDisplayed();
        await webTablesPage.editButton.click();
        await webTablesPage.salaryInput.waitForDisplayed();
        await webTablesPage.salaryInput.clearValue();
        await webTablesPage.salaryInput.setValue('90000');
        await webTablesPage.submit.waitForDisplayed();
        await webTablesPage.submit.click();

        await webTablesPage.searchInput.waitForDisplayed();
        await webTablesPage.searchInput.click();
        await webTablesPage.searchInput.setValue('90000');
        await webTablesPage.searchButton.waitForDisplayed();
        await webTablesPage.searchButton.click();
        await browser.pause(1000);
        await webTablesPage.gridCells[4].waitForDisplayed();
        expect(await webTablesPage.gridCells[4].getText()).to.equal('90000'),'User salary is not edited!';

        //Verify that the user's department is editable.
        await webTablesPage.editButton.waitForDisplayed();
        await webTablesPage.editButton.click();
        await webTablesPage.departmentInput.waitForDisplayed();
        await webTablesPage.departmentInput.clearValue();
        await webTablesPage.departmentInput.setValue('Test Department');
        await webTablesPage.submit.waitForDisplayed();
        await webTablesPage.submit.click();

        await webTablesPage.searchInput.waitForDisplayed();
        await webTablesPage.searchInput.click();
        await webTablesPage.searchInput.setValue('Test Department');
        await webTablesPage.searchButton.waitForDisplayed();
        await webTablesPage.searchButton.click();
        await browser.pause(1000);
        await webTablesPage.gridCells[5].waitForDisplayed();
        expect(await webTablesPage.gridCells[5].getText()).to.equal('Test Department'),'User department is not edited!';

    });

    it('Verify that the deleting a user is successful', async () => {

        await webTablesPage.searchInput.waitForDisplayed();
        await webTablesPage.searchInput.click();
        await webTablesPage.searchInput.setValue('Michelle');
        await webTablesPage.searchButton.waitForDisplayed();
        await webTablesPage.searchButton.click();
        await webTablesPage.deleteButton.waitForDisplayed();
        await webTablesPage.deleteButton.click();
        await browser.pause(1000);
        await webTablesPage.searchInput.waitForDisplayed();
        await webTablesPage.searchInput.click();
        await webTablesPage.searchInput.setValue('Michelle');
        expect(await webTablesPage.noRowsFound.isDisplayed()).to.be.true,'User is not deleted!';


    });
    
});

