import { $$, $ } from '@wdio/globals';

class LinksPage {
    

    get homeLink() {
        return $('//a[contains(@id, "simpleLink")]');
    }

    //api calls links
    get createdLink() {
        return $('//a[contains(@id, "created")]');
    }
    get noContentLink() {
        return $('//a[contains(@id, "no-content")]');
    }
    get movedLink() {
        return $('//a[contains(@id, "moved")]');
    }
    get badRequestLink() {
        return $('//a[contains(@id, "bad-request")]');
    }
    get unauthorizedLink() {
        return $('//a[contains(@id, "unauthorized")]');
    }
    get forbiddenLink() {
        return $('//a[contains(@id, "forbidden")]');
    }
    get notFoundLink() {
        return $('//a[contains(@id, "invalid-url")]');
    }
    //api calls links finished


}

export default new LinksPage();
