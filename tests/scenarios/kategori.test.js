import * as element from '@tests/helpers/elements';
import * as route from '@tests/helpers/route';
import {ROUTES} from '@tests/const/routes';
import * as loginPage from '@tests/pages/login.page';
import * as homePage from '@tests/pages/home.page';
import * as kategoriPage from '@tests/pages/kategori.page';
import login from '@tests/data/login.data';
import * as assert from '@helpers/asserts';
import { VALID_EMAIL } from '@tests/data/login.data';
import { VALID_PASSWORD } from '@tests/data/login.data';
import { VALID_NAMA } from '@tests/data/kategori.data';
import { VALID_DESKRIPSI } from '@tests/data/kategori.data';

describe('Kategori', function(){
    beforeEach(() => {
        route.visit(ROUTES.login);
    });

it('A1. Added new category successfully', () => {

    element.fillField(loginPage.emailField, VALID_EMAIL);
    element.fillField(loginPage.passwordField, VALID_PASSWORD);
    element.click(loginPage.loginBtn);

    element.click(homePage.kategoriMenu);
    element.click(kategoriPage.tambahBtn);

    element.fillField(kategoriPage.namaField, VALID_NAMA);
    element.fillField(kategoriPage.deskripsiField, VALID_DESKRIPSI);
    element.click(kategoriPage.simpanBtn);

    assert.shouldBeVisible(kategoriPage.succeedNotif);

    });

it('A2. Added new category with empty “name” field', () => {

    element.fillField(loginPage.emailField, VALID_EMAIL);
    element.fillField(loginPage.passwordField, VALID_PASSWORD);
    element.click(loginPage.loginBtn);
    
    element.click(homePage.kategoriMenu);
    element.click(kategoriPage.tambahBtn);
    
    element.fillField(kategoriPage.deskripsiField, VALID_DESKRIPSI);
    element.click(kategoriPage.simpanBtn);
    
    assert.shouldBeVisible(kategoriPage.warningNotif);
    
    });    
    
});