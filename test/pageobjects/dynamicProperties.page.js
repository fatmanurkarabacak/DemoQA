import { $$, $ } from '@wdio/globals';

class UploadDownloadPage {
  

    get enableAfter() {
        return $('//button[@id="enableAfter"]');
    }

    get colorChange() {
        return $('//button[@id="colorChange"]');
    }

    get visibleAfter() {
        return $('//button[@id="visibleAfter"]');
    }

   

}

export default new UploadDownloadPage();
