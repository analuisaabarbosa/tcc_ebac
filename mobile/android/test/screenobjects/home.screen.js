import { $ } from '@wdio/globals'

class HomeScreen {
    async openMenu(menu) {
        await $(`id:tab-${menu}`).click()
    }

    async validateSearchText() {
        $('android=new UiSelector().text("Search Products")')
    }
}

export default new HomeScreen();
