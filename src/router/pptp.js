export default [
  {
    path: '/pptp',
    name: 'PPTP',
    component: () => import('@/views/pptp/PPTP.vue'),
    meta: {
      requiresAuth: true,
    },
  },
];
