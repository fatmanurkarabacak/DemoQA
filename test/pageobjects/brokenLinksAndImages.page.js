import { $$, $ } from '@wdio/globals';

class BrokenLinksAndImagesPage {
    
    get validImage() {
        return $$('//img[@src="/images/Toolsqa.jpg"]');
    }
   
    get brokenImage() {
        return $('//img[@src="/images/Toolsqa_1.jpg"]');
    }

    get validLink() {
        return $('//a[contains(text(), "Click Here for Valid Link")]');
    }

    get brokenLink() {
        return $('//a[contains(text(), "Click Here for Broken Link")]');
    }


}

export default new BrokenLinksAndImagesPage();
