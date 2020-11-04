import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Layout from './views/Layout';
import Home from './views/Home';
import Licenses from './views/Licenses';
import Releases from './views/Releases';
import Prices from './views/Prices';
import Analytics from './views/Analytics';
import Management from './views/Management';
// import Updates from './views/Updates';
// import Settings from './views/Settings';
import Placeholder from './views/Placeholder';

const routes = [
    {
        path: '/',
        component: Layout,
        name: 'Layout',
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: Home
            },
            {
                path: '/licenses',
                component: Licenses
            },
            {
                path: '/releases',
                component: Releases
            },
            {
                path: '/prices',
                component: Prices
            },
            {
                path: '/analytics',
                component: Analytics
            },
            {
                path: '/management',
                component: Management
            },
            {
                path: '/updates',
                component: Placeholder
            },
            {
                path: '/settings',
                component: Placeholder
            },
            {
                path: '/calendar',
                component: Placeholder
            },
        ]
    }
];

const Router = new VueRouter({
    routes
});

export default Router;