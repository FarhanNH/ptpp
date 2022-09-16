import Vue from 'vue';
import VueRouter from 'vue-router';
import Functions from '../tools/Functions';
import ptpp from './ptpp';
import profile from './profile';
import role from './role';
import user from './user';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/components/Home/Dashboard.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      ...ptpp,
      ...profile,
      ...role,
      ...user,
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      requiresAuth: false,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = [];
  router.options.routes.forEach((data) => {
    if (data.meta.requiresAuth != undefined) {
      if (!data.meta.requiresAuth) {
        publicPages.push(data.path);
      }
    }
    if (data.children != undefined) {
      data.children.forEach((childrenPath) => {
        if (!childrenPath.meta.requiresAuth) {
          publicPages.push(childrenPath.path);
        }
      });
    }
  });
  const authRequired = !publicPages.includes(to.path);
  let token = Functions.ReadSessionCustom('isLogin');
  if (authRequired && token == null) {
    return next({
      path: '/login',
      query: {
        returnUrl: to.path,
      },
    });
  } else {
    return next();
  }
});

export default router;
