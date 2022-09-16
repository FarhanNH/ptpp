export default [
  {
    path: '/ptpp',
    name: 'PTPP',
    component: () => import('@/views/ptpp/PTPP.vue'),
    meta: {
      requiresAuth: true,
    },
  },
];
