const { test, expect } = require('../fixtures');
const config = require('../config/env');

 test.describe('login|API',()=>{

  test('Valid credential return token ',async({authApi})=>{

  const response=await authApi.login(config.email,config.password);
  expect(response.status()).toBe(200);

  const body=await response.json();
  expect(body.access_token).toBeTruthy();

  });

  test('Invalid credential are rejected',async({authApi})=>{

    const response=await authApi.login('nobody@email.com','wrong password');
    expect(response.status()).toBe(401);
});

test('the token works on protected endpoint',async({authApi})=>{


  const login=await authApi.login(config.email,config.password);

 const {access_token}=await login.json();
 const profile=await authApi.getProfile(access_token);
 expect(profile.status()).toBe(200);

});
 

});




