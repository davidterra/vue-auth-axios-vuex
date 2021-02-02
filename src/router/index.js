import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Signin from '../views/Signin.vue';
import Account from '../views/Account.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
    {
        path: '',
        name: 'home',
        component: Home,
        meta: {
            public: true
        }
    },
    {
        path: '*',
        component: Home,
        meta: {
            public: true
        }
    },
    {
        path: '/cadastre-se',
        name: 'signup',
        component: () => import ("../views/Signup.vue"),
        meta : {
            public: true
        }
    },
    {
        path: '/entrar',
        name: 'signin',
        component: Signin,
        meta: {
            public: true
        }
    },
    {
        path: '/conta',
        name: 'account',
        component: Account,
        meta: {
            public: false
        }
    }

];

const router = new VueRouter({
    routes
});

router.beforeEach((routeTo, routeFrom, next) => {
    if (!routeTo.meta.public && !store.state.token) {
        return next({
            path: '/cadastre-se'
        });
    }
    next();    
});

export default router;