import Vuex from 'vuex';
import Vue from 'vue';
import http from '@/http';
import AuthService from './services/authservice';
import UserService from './services/userservice';
import User from './models/user';

Vue.use(Vuex);

const state = {
    token: null,
    auth: {
        id: 0,
        email: ""
    },
    user: new User('','')
};

const mutations = {
    DEFINE_AUTHORIZED_USER(state, { token, auth }) {
        state.token = token;
        state.auth = auth;
    },

    DEFINE_USER(state, { user })
    {
        state.user = user;
    },

    LOGOUT_USER(state) {
        state.token = null;
        state.auth = {};
        state.user = {};
    }
};

const actions = {
    signin({ commit }, user) {
        return new Promise((resolve, reject) => {
            
            var authService = new AuthService(http);
            var userService = new UserService(http);
            
            authService.getAuthorization(user)
                .then(auth => {
                    commit('DEFINE_AUTHORIZED_USER', {
                        token: auth.token,                        
                        auth: { id: auth.id, email: auth.email }
                    })

                    userService.getUser(auth.id)
                        .then(user => {
                            commit('DEFINE_USER', {
                                user: user
                            })
                        }, (err) => {console.log(err)})

                    resolve(auth);

                }, (error) => {                    
                    reject(error);
                })
        })
    }
};

const getters = {
    isAuthenticated: state => Boolean(state.token),    
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})