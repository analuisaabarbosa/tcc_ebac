import { $ } from '@wdio/globals';
const { faker } = require('@faker-js/faker');

const firstName = faker.person.firstName()
const lastName = faker.person.lastName()
const phoneNumber = faker.phone.number({ style: 'national' })
const email = faker.internet.email({ firstName: firstName })
const password = faker.internet.password()

class SignUpScreen {
    
    get signUpBtn() {
        return $('android=new UiSelector().text("Sign up")')
    }

    get firstNameInput() {
        return $('id:firstName')
    }

    get lastNameInput() {
        return $('id:lastName')
    }

    get phoneInput() {
        return $('id:phone')
    }

    get emailInput() {
        return $('id:email')
    }

    get passwordInput() {
        return $('id:password')
    }

    get repasswordInput() {
        return $('id:repassword')
    }

    get creatBtn() {
        return $('~Create')
    }

    async signUpUser() {
        await this.signUpBtn.click()
        await this.firstNameInput.setValue(firstName)
        await this.lastNameInput.setValue(lastName)
        await this.phoneInput.setValue(phoneNumber)
        await this.emailInput.setValue(email)
        await this.passwordInput.setValue(password)
        await this.repasswordInput.setValue(password)
        await this.creatBtn.click()
    }
}

export default new SignUpScreen();