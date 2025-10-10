import { expect } from 'chai';
import mainPage from '../pageobjects/main.page';
import { BASE_URL, LINKS_URL } from '../config/urls';
import { browser, $ } from '@wdio/globals';
import { before } from 'mocha';
import elementsPage from '../pageobjects/elements.page';
import linksPage from '../pageobjects/links.page';

describe('Web Elements - Links', () => {

    before(async () => {
        await browser.url(BASE_URL);
        await browser.maximizeWindow();
    });

    it('Verify that the links icon redirects to the correct page', async () => {
        await mainPage.avatars[0].click();
        await elementsPage.elementsOptions[5].waitForDisplayed(5000);
        await elementsPage.elementsOptions[5].click();
        await browser.pause(1000);
        const url = await browser.getUrl();
        console.log(url);
        expect(await browser.getUrl()).to.equal(LINKS_URL);
        await browser.pause(2000);
    });

    it('Verify that the Home link is working', async () => {
        await linksPage.homeLink.waitForDisplayed();
        await linksPage.homeLink.click();
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        expect(await browser.getUrl()).to.equal(BASE_URL + '/'), 'Home link is not working!';
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
        await browser.pause(2000);
    });

    it('Verify that the Created link is working', async () => {
        const createdMock = await browser.mock('https://demoqa.com/created');
        createdMock.clear();

        await linksPage.createdLink.waitForDisplayed();
        await linksPage.createdLink.click();

        await browser.waitUntil(async () => (await createdMock.calls).length > 0, {
            timeout: 5000,
            timeoutMsg: 'Created endpoint çağrısı gelmedi'
        });

        const calls = await createdMock.calls;
        const lastCall = calls[calls.length - 1];

        expect(lastCall.request.url).to.equal('https://demoqa.com/created');

        const responseEl = await $('#linkResponse');
        await responseEl.waitForDisplayed({ timeout: 5000 });
        const responseText = await responseEl.getText();
        expect(responseText).to.include('201', 'UI response text does not contain status 201');
        expect(responseText.toLowerCase()).to.include('created');
    });

    it('Verify that the No Content link is working', async () => {
        const createdMock = await browser.mock('https://demoqa.com/no-content');
        createdMock.clear();

        await linksPage.noContentLink.waitForDisplayed();
        await linksPage.noContentLink.click();

        await browser.waitUntil(async () => (await createdMock.calls).length > 0, {
            timeout: 5000,
            timeoutMsg: 'No Content endpoint çağrısı gelmedi'
        });

        const calls = await createdMock.calls;
        const lastCall = calls[calls.length - 1];

        expect(lastCall.request.url).to.equal('https://demoqa.com/no-content');

        const responseEl = await $('#linkResponse');
        await responseEl.waitForDisplayed({ timeout: 5000 });
        const responseText = await responseEl.getText();
        expect(responseText).to.include('204', 'UI response text does not contain status 204');
        expect(responseText.toLowerCase()).to.include('no content');
    });

    it('Verify that the Moved link is working', async () => {
        const createdMock = await browser.mock('https://demoqa.com/moved');
        createdMock.clear();

        await linksPage.movedLink.waitForDisplayed();
        await linksPage.movedLink.click();
        
        await browser.waitUntil(async () => (await createdMock.calls).length > 0, {
            timeout: 5000,
            timeoutMsg: 'Moved endpoint çağrısı gelmedi'
        });
        
        const calls = await createdMock.calls;
        const lastCall = calls[calls.length - 1];

        expect(lastCall.request.url).to.equal('https://demoqa.com/moved');

        const responseEl = await $('#linkResponse');
        await responseEl.waitForDisplayed({ timeout: 5000 });
        const responseText = await responseEl.getText();
        expect(responseText).to.include('301', 'UI response text does not contain status 301');
        expect(responseText.toLowerCase()).to.include('moved');
        await browser.pause(2000);

    });

    it('Verify that the Bad Request link is working', async () => {
        const createdMock = await browser.mock('https://demoqa.com/bad-request');
        createdMock.clear();

        await linksPage.badRequestLink.waitForDisplayed();
        await linksPage.badRequestLink.click();
        
        await browser.waitUntil(async () => (await createdMock.calls).length > 0, {
            timeout: 5000,
            timeoutMsg: 'Bad Request endpoint çağrısı gelmedi'
        });
        
        const calls = await createdMock.calls;
        const lastCall = calls[calls.length - 1];

        expect(lastCall.request.url).to.equal('https://demoqa.com/bad-request');
        
        const responseEl = await $('#linkResponse');
        await responseEl.waitForDisplayed({ timeout: 5000 });
        const responseText = await responseEl.getText();
        expect(responseText).to.include('400', 'UI response text does not contain status 400');
        expect(responseText.toLowerCase()).to.include('bad request');
        await browser.pause(2000);
    });

    it('Verify that the Unauthorized link is working', async () => {
        const createdMock = await browser.mock('https://demoqa.com/unauthorized');
        createdMock.clear();

        await linksPage.unauthorizedLink.waitForDisplayed();
        await linksPage.unauthorizedLink.click();
        
        await browser.waitUntil(async () => (await createdMock.calls).length > 0, {
            timeout: 5000,
            timeoutMsg: 'Unauthorized endpoint çağrısı gelmedi'
        });
        
        const calls = await createdMock.calls;
        const lastCall = calls[calls.length - 1];

        expect(lastCall.request.url).to.equal('https://demoqa.com/unauthorized');
        
        const responseEl = await $('#linkResponse');
        await responseEl.waitForDisplayed({ timeout: 5000 });
        const responseText = await responseEl.getText();
        expect(responseText).to.include('401', 'UI response text does not contain status 401');
        expect(responseText.toLowerCase()).to.include('unauthorized');
        await browser.pause(2000);

    });

    it('Verify that the Forbidden link is working', async () => {
        const createdMock = await browser.mock('https://demoqa.com/forbidden');
        createdMock.clear();
        
        await linksPage.forbiddenLink.waitForDisplayed();
        await linksPage.forbiddenLink.click();
        
        await browser.waitUntil(async () => (await createdMock.calls).length > 0, {
            timeout: 5000,
            timeoutMsg: 'Forbidden endpoint çağrısı gelmedi'
        });
        
        const calls = await createdMock.calls;
        const lastCall = calls[calls.length - 1];

        expect(lastCall.request.url).to.equal('https://demoqa.com/forbidden');
        
        const responseEl = await $('#linkResponse');
        await responseEl.waitForDisplayed({ timeout: 5000 });
        const responseText = await responseEl.getText();
        expect(responseText).to.include('403', 'UI response text does not contain status 403');
        expect(responseText.toLowerCase()).to.include('forbidden');
        await browser.pause(2000);

    });
    
    it('Verify that the Not Found link is working', async () => {
        const createdMock = await browser.mock('https://demoqa.com/invalid-url');
        createdMock.clear();
        
        await linksPage.notFoundLink.waitForDisplayed();
        await linksPage.notFoundLink.click();
        
        await browser.waitUntil(async () => (await createdMock.calls).length > 0, {
            timeout: 5000,
            timeoutMsg: 'Not Found endpoint çağrısı gelmedi'
        });

        const calls = await createdMock.calls;
        const lastCall = calls[calls.length - 1];

        expect(lastCall.request.url).to.equal('https://demoqa.com/invalid-url');
        
        const responseEl = await $('#linkResponse');
        await responseEl.waitForDisplayed({ timeout: 5000 });
        const responseText = await responseEl.getText();
        expect(responseText).to.include('404', 'UI response text does not contain status 404');
        expect(responseText.toLowerCase()).to.include('not found');

    });
});

