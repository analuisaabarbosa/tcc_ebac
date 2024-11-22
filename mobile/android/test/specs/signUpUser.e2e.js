import homeScreen from "../screenobjects/home.screen";
import signupScreen from "../screenobjects/signup.screen";
import 'dotenv';

describe('Sign up user', () => {
    it('Must successfully register a user', async () => {

        await homeScreen.openMenu('profile')
        await signupScreen.signUpUser()
        await homeScreen.validateSearchText()

    });
});