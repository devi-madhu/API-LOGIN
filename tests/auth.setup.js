
 const{test,expect}=require('../fixtures');
 const config=require('../config/env');
 const{AUTH_FILE,TOKEN_KEY}=require('../util/constant');
const { AuthApi } = require('../api/authApi');

  test('Autheticate via API',async({authApi,page})=>{

   const response= await authApi.login(config.email,config.password);
   expect(response.status(),await response.text()).toBe(200);

   const {access_token}=await response.json();

   await  page.goto(config.baseURL);

   await page.evaluate(([key,token])=>localStorage.setItem(key,token),[TOKEN_KEY,access_token]);

   await page.context().storageState({path:AUTH_FILE});
  });










     

     







