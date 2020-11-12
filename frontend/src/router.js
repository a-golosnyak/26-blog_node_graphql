import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

// import PostIndex from './components/router/post/PostIndex.vue';
// import PostShow from './components/router/post/PostShow.vue';
// import PostCreateUpdate from './components/router/post/PostCreateUpdate.vue';
// import LoginPage from './components/router/page/LoginPage.vue';
// import RegisterPage from './components/router/page/RegisterPage.vue';
// import UserIndex from './components/router/user/UserShow.vue';
// import UserUpdate from './components/router/user/UserUpdate.vue';
//
 let router = new VueRouter({
//     mode: 'history',
//     routes: [
//         {
//             path: '/',
//             component: PostIndex,
//             name: 'home'
//         },
//
//         {
//             path: '/user/:id',
//             component: UserIndex,
//             name: 'user.index',
//             props: true,
//         },
//         {
//             path: '/user/:id/edit',
//             component: UserUpdate,
//             name: 'user.edit',
//             props: true,
//         },
//
//         {
//             path: '/post/create',
//             component: PostCreateUpdate,
//             name: 'post.create',
//             props: true,
//         },
//         {
//             path: '/post/:id/edit',
//             component: PostCreateUpdate,
//             name: 'post.edit',
//             props: true,
//         },
//         {
//             path: '/post/:id',
//             component: PostShow,
//             name: 'post.show',
//             props: true,
//         },
//
//         {
//             path: '/login',
//             component: LoginPage,
//             name: 'login'
//         },
//         {
//             path: '/register',
//             component: RegisterPage,
//             name: 'register'
//         }
//     ],
});

export default router;
