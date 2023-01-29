import {createRouter,createWebHistory} from 'vue-router';
// import Dashboard from '../js/views/Dashboard.vue';
// import LiveGames from '../js/views/LiveGames.vue';
// import HowToPlay from '../js/views/HowToPlay.vue';
// import Winners from '../js/views/Winners.vue';
// import MyAccount from '../js/views/MyAccount.vue';
// import DefaultLayout from '../js/components/DefaultLayout.vue';
// import FAQ from '../js/views/MyAccount.vue';
// import Contact from '../js/views/MyAccount.vue';
// import Terms from '../js/views/MyAccount.vue';
// import ContactUs from '../js/views/MyAccount.vue';
// import About from '../js/views/MyAccount.vue';
// import Collab from '../js/views/MyAccount.vue';
// import Rules from '../js/views/MyAccount.vue';
import comingsoon from '../js/views/comingsoon.vue';
import Testing from '../js/views/Testing.vue';


// push
const routes = [
    // coming soon route
    {
        path: '/',
        name: 'Testing',
        component: Testing,
        meta: {
            requiresAuth: false,
            isGuest: true,
            requiresAdmin: false
        }
    },
    // catch 404 and redirect to home
    
    // {
    //     path: '/:catchAll(.*)',
    //     redirect: '/'
    // }

    
]
         

const router = createRouter({
    history: createWebHistory(),
    routes
}


);

//maintenance page only







// router.beforeEach((to, from, next) => {

//     const protectedRoutes = [];
    

//     if (!to.meta.requiresAdmin) 
//      {
//         if (to.meta.requiresAuth && !store.state.user.token){
//             next({name: 'Login'})
//         } else if (store.state.user.token && (to.meta.isGuest)) {
//             next({name: 'Dashboard'});    
//         }else {
//             next();
//         } 
//     }else{//use
//         if (store.state.user.token && store.state.user.data.role === 'admin') {
//             next();
//         }else{
//             return next('/unauthorized');
            
//         }
//     }
// });


export default router;