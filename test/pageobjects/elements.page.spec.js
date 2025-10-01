import { $$, $ } from '@wdio/globals';

class ElementsPage {
    get avatars() {
        return $$('//*[contains(@class, "avatar")]');
    }

    get elementsOptions() {
        return $$('ul.menu-list li.btn.btn-light');
    }

    get fullNameInput() {
        return $('input[placeholder="Full Name"]');
    }

    get emailInput() {
        return $('input[type="email"]');
    }

    get currentAddressInput() {
        return $('textarea[placeholder="Current Address"]');
    }

    get permanentAddressInput() {
        return $('textarea[id="permanentAddress"]');
    }

    get submitButton() {
        return $('button[id="submit"]');
    } 
    
    //after submit
    get nameOutput() {
        return $('p[id="name"]');
    }

    get emailOutput() {
        return $('p[id="email"]');
    }

    get currentAddressOutput() {
        return $('p[id="currentAddress"]');
    }
    
    get permanentAddressOutput() {
        return $('p[id="permanentAddress"]');
    }

    get checkboxes() {
        return $$('//*[name()="svg"][@class="rct-icon rct-icon-uncheck"]');
    }

    get checkboxesChecked() {
        return $$('//*[name()="svg"][@class="rct-icon rct-icon-check"]');
    }

    get toggleButton() {
        return $$('//button[@aria-label="Toggle"]');
    }

    get selectedResults() {
        return $('//div[@id="result"]');
    }

    get selectedList() {
        return $('//span[contains(@class,"text-success")]');
    }

    //radio-buttons
    get radioButtons() {
        return $$('//label[@for="yesRadio"]');
    }

    get yesRadioButton() {
        return $('//label[@for="yesRadio"]');
    }

    get impressiveRadioButton() {
        return $('//label[@for="impressiveRadio"]');
    }

    get noRadioButton() {
        return $('//label[@for="noRadio"]');
    }

    get selectedRadioButton() {
        return $('//span[contains(@class,"text-success")]');
    }


}

export default new ElementsPage();
