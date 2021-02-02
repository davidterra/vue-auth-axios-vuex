import Vuex from 'vuex';
import Vue from 'vue';
import http from '@/http'
import jwt_decode from "jwt-decode";

Vue.use(Vuex);

const state = {
    token: null,
    auth: {
        id: 0,
        email: ""
    }
};

const authUser = (token) => {
    var decoded = jwt_decode(token);

    return { id: decoded.sub, email: decoded.email };
};

// const getUser = (token) => {

//     const auth = authUser(token);
//     const id = auth.id;

//     if (id) {
//         return new Promise((resolve, reject) => {
//             http.get(`660/users/${id}`)
//                 .then((response) => {
//                     // resolve({ firstname: response.data.firstname });
//                     resolve(response.data.firstname);
//                 }, (err) => {
//                     reject(err);
//                 });
//         })
//     }

// };

const mutations = {
    DEFINE_AUTHORIZED_USER(state, { token, auth }) {
        state.token = token;
        state.auth = auth;
    },

    LOGOUT_USER(state) {
        state.token = null;
        state.auth = {};
    }
};

const actions = {
    signin({ commit }, user) {
        return new Promise((resolve, reject) => {
            http.post('signin', user)
                .then(response => {
                    commit('DEFINE_AUTHORIZED_USER', {
                        token: response.data.accessToken,
                        auth: authUser(response.data.accessToken),
                    })
                    resolve(response);
                }, (error) => {
                    reject(error);
                })
        })
    }
};

const getters = {
    isAuthenticated: state => Boolean(state.token),
    // firstName: state => getUser(state.token).then((response) => { return response }, (err) => console.log(err)),
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})