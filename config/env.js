
require('dotenv').config({quiet:true});

module.exports={

    baseURL:process.env.BASE_URL,
    apiURL:process.env.API_URL,
    email:process.env.USER_EMAIL,
    password:process.env.USER_PASSWORD,
};