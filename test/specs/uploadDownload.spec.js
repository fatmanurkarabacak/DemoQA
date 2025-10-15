import { expect } from 'chai';
import mainPage from '../pageobjects/main.page';
import { BASE_URL, UPLOAD_DOWNLOAD_URL } from '../config/urls';
import { browser, $ } from '@wdio/globals';
import { before } from 'mocha';
import elementsPage from '../pageobjects/elements.page';
import uploadDownloadPage from '../pageobjects/uploadDownload.page';

describe('Web Elements - Upload Download', () => {

    before(async () => {
        await browser.url(BASE_URL);
        await browser.maximizeWindow();
    });

    it('Verify that the links icon redirects to the correct page', async () => {
        await mainPage.avatars[0].click();
        await elementsPage.elementsOptions[7].waitForDisplayed(5000);
        await elementsPage.elementsOptions[7].click();
        await browser.pause(1000);
        const url = await browser.getUrl();
        console.log(url);
        expect(await browser.getUrl()).to.equal(UPLOAD_DOWNLOAD_URL);
        await browser.pause(2000);
    });

    it('Verify that clicking download button downloads a jpeg file', async () => {
        await uploadDownloadPage.downloadButton.click();
        await browser.pause(2000);

        const downloadsPath = process.platform === 'win32' 
            ? `${process.env.USERPROFILE}\\Downloads`
            : `${process.env.HOME}/Downloads`;

        const fs = require('fs');
        const files = fs.readdirSync(downloadsPath);
        const downloadedFile = files.find(file => file.includes('sampleFile') && file.endsWith('.jpeg'));
        
        expect(downloadedFile).to.not.be.undefined;

        if (downloadedFile) {
            fs.unlinkSync(`${downloadsPath}/${downloadedFile}`);
        }
    });

    it('Verify that file can be uploaded successfully', async () => {
        const fs = require('fs');
        const path = require('path');
        const testFilePath = path.join(__dirname, 'testFile.txt');
        fs.writeFileSync(testFilePath, 'This is a test file');

        await uploadDownloadPage.uploadButton.setValue(testFilePath);
        await browser.pause(2000);

        const uploadedFilePath = await $('//p[@id="uploadedFilePath"]');
        await uploadedFilePath.waitForDisplayed();
        const uploadedText = await uploadedFilePath.getText();

        expect(uploadedText).to.include('testFile.txt');

        fs.unlinkSync(testFilePath);
    });


    


});

