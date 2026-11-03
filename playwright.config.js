// @ts-check
const { defineConfig, devices }=require('@playwright/test');
const config=require('./config/env');
const {AUTH_FILE}=require('./util/constant');
const constant = require('./util/constant');

module.exports=  defineConfig({
  testDir: './tests',
  reporter: 'html',
  
  use: {baseURL:config.baseURL},

 projects: [
    
{ name:'setup',testMatch:/auth\.setup.js/},
      
{
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] ,storageState:AUTH_FILE},
      dependencies:['setup'],
      testIgnore: /auth\.setup\.js/,
    },

    

   

       
  ],
});