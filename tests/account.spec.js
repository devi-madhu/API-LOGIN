
const{test,expect}=require('../fixtures');
//const { AccountPage } = require('../pages/accountPage');

test.describe('Account',()=>{

    test.beforeEach(async({accountPage})=>{

       await accountPage.open();


    })

    test('Clicking on the favorite links',async({page,accountPage})=>{

        await accountPage.clicksOnFavouriteLink();
        await  expect(accountPage.favoriteText).toBeVisible();


    });


    

})