import { $$, $ } from '@wdio/globals';

class UploadDownloadPage {
  

    get downloadButton() {
        return $('//a[@id="downloadButton"]');
    }

    get uploadButton() {
        return $('//input[@id="uploadFile"]');
    }

    get uploadedFilePath() {
        return $('//p[@id="uploadedFilePath"]');
    }

}

export default new UploadDownloadPage();
