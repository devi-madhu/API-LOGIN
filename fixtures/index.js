/* const base = require('@playwright/test');

const { AuthApi } = require('../api/AuthApi');
const { HeaderComponent } = require('../components/HeaderComponent');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { AccountPage } = require('../pages/AccountPage');

// Fixtures create the objects for each test, so specs never write `new ...`.
const test = base.test.extend({
  authApi: async ({ request }, use) => use(new AuthApi(request)),
  header: async ({ page }, use) => use(new HeaderComponent(page)),
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  homePage: async ({ page }, use) => use(new HomePage(page)),
  productPage: async ({ page }, use) => use(new ProductPage(page)),
  cartPage: async ({ page }, use) => use(new CartPage(page)),
  checkoutPage: async ({ page }, use) => use(new CheckoutPage(page)),
  accountPage: async ({ page }, use) => use(new AccountPage(page)),
});

module.exports = { test, expect: base.expect };
 */

 const base=require('@playwright/test');
 const{AuthApi}=require('../api/authApi');
 const{AccountPage}=require('../pages/accountPage.js')
 //const{loginPage}=require('/pages/loginPage.js');

 const test=base.test.extend({
    authApi:async({request},use)=>use(new AuthApi(request)),
   accountPage:async({page},use)=>use( new AccountPage(page))


    //loginPage:async({request},use)=>use(new LoginPage(page)),



 });
 module.exports={test,expect:base.expect};

