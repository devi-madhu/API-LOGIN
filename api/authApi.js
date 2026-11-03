 const  config=require('../config/env');

 class AuthApi{

    constructor(request){
        this.request=request;

    }

    async login(email,password){
        return this.request.post(`${config.apiURL}/users/login`,{

            data:{email,password}

        })
    }

    async getProfile(token){
        return this.request.get(`${config.apiURL}/users/me`,{

            headers:{Authorization:`Bearer ${token}`},

        })
    }

 }

  module.exports={AuthApi}