import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "e881e057-1da2-42bf-b7b3-e76f05d85ee5"}
})

export const userApi = {
    requestUsers(pageNumber, pageSize){
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => { return response.data});
    },
    followUser(userId){
        return instance.post(`follow/${userId}`)
            .then(response => { return response.data});
    },
    unFollowUser(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => { return response.data});
    },

    getUserProfile(userId){
        console.warn('Please use getUserProfile in profileApi')
        return profileApi.getUserProfile(userId)
    }
}

export const profileApi = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then((response) =>{
                return response.data
            });
    },

    getUserStatus(userId){
      return instance.get(`profile/status/${userId}`)
          .then((response) =>{
              return response.data
          })
    },

    updateUserStatus(status){
        return instance.put('profile/status', {status})
            .then((response) =>{
                return response.data
            })
    }
}

export const authApi = {
    me(params){
        return instance.get(params)
            .then(response => { return response.data});
    },

    login(email, password, rememberMe){
        return instance.post("auth/login", {email, password, rememberMe})
            .then(response => { return response.data});
    },

    logout(){
        return instance.delete("auth/login")
            .then(response => { return response.data});
    }
}

