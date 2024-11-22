import { $ } from '@wdio/globals'

class ProfileScreen {
    async profileName(name) {
        return $(`//android.widget.TextView[@text="${name}"]`)
    }
}

export default new ProfileScreen();