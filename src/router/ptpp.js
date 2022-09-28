export default [
  {
    path: '/ptpp/Input',
    name: 'Input PTPP',
    component: () => import('@/views/ptpp/InputPTPP.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/ptpp',
    name: 'PTPP',
    component: () => import('@/views/ptpp/ListPTPP.vue'),
    meta: {
      requiresAuth: true,
    },
  },
];
