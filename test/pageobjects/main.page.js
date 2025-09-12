import { $ } from '@wdio/globals';

class MainPage {
    get avatars() {
        return $('//*[contains(@class, "avatar")]');
    }
}

export default new MainPage();
