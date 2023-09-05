import * as element from '@tests/helpers/elements';
import * as route from '@tests/helpers/route';
import {ROUTES} from '@tests/const/routes';
import * as loginPage from '@tests/pages/login.page';
import login from '@tests/data/login.data';
import * as homePage from '@tests/pages/home.page';
import * as assert from '@helpers/asserts';
import { VALID_EMAIL } from '@tests/data/login.data';
import { VALID_PASSWORD } from '@tests/data/login.data';


describe('Login Test', function(){
    beforeEach(() => {
        route.visit(ROUTES.login);
    });

it('As customer, I want to login successfully', () => {

    element.fillField(loginPage.emailField, VALID_EMAIL);
    element.fillField(loginPage.passwordField, VALID_PASSWORD);
    element.click(loginPage.loginBtn);

    assert.shouldBeVisible(homePage.kasirajaHeader);

    });
});