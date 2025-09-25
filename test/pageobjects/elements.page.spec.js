import { $$, $ } from '@wdio/globals';

class ElementsPage {
    get avatars() {
        return $$('//*[contains(@class, "avatar")]');
    }

    get elementsCheckboxes() {
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
}

export default new ElementsPage();
