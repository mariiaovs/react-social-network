import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "50f9bff6-29c3-48be-afed-14c2bda4d794" }
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },

    followUser(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);            
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);            
    },
    updateStatus(status) {                
        return instance.put(`profile/status`, {status: status});            
    }
}

export const headerAPI = {
    authorise() {
        return instance.get(`auth/me`)
            .then(response => {
                return response;
            });
    },
    login(email, password, rememberMe = false) {
        return instance.post(`/auth/login`, { email, password, rememberMe } )
    },
    logout() {
        return instance.delete(`/auth/login`);
    }
}
