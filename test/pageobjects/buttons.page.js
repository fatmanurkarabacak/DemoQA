import { $$, $ } from '@wdio/globals';

class ButtonsPage {
    get doubleClickButton() {
        return $('button[id="doubleClickBtn"]');
    }
    get rightClickButton() {
        return $('button[id="rightClickBtn"]');
    }
    get clickMeButton() {
        return $('button[id="nmfby"]');
    }

    get doubleClickMessage() {
        return $('p[id="doubleClickMessage"]');
    }
    get rightClickMessage() {
        return $('p[id="rightClickMessage"]');
    }
    get clickMeMessage() {
        return $('p[id="dynamicClickMessage"]');
    }



}

export default new ButtonsPage();
