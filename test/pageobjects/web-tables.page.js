import { $$, $ } from '@wdio/globals';

class WebTablesPage {
    get addButton() {
        return $('button[id="addNewRecordButton"]');
    }

    //registration form
    get firstNameInput() {
        return $('input[id="firstName"]');
    }
    get lastNameInput() {
        return $('input[id="lastName"]');
    }
    get emailInput() {
        return $('input[id="userEmail"]');
    }
    get ageInput() {
        return $('input[id="age"]');
    }
    get salaryInput() {
        return $('input[id="salary"]');
    }
    get departmentInput() {
        return $('input[id="department"]');
    }
    get submit() {
        return $('//button[@id="submit"]');
    }
    //registration form finish

    get searchInput() {
        return $('input[id="searchBox"]');
    }

    get searchButton() {
        return $('//span[@id="basic-addon2"]');
    }

    get gridCells() {
        return $$('//div[@role="gridcell"]');
    }

    get editButton() {
        return $('//span[@title="Edit"]');
    }

    get deleteButton() {
        return $('//span[@title="Delete"]');
    }

    get noRowsFound() {
        return $('//div[@class="rt-noData"]');
    }



}

export default new WebTablesPage();
