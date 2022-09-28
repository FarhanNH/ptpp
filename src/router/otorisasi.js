export default [
  {
    path: '/otorisasi',
    name: 'Otorisasi',
    component: () => import('@/views/otorisasi/Otorisasi.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/otorisasi/detail/ptpp',
    name: 'Detail Otorisasi PTPP',
    component: () => import('@/views/otorisasi/DetailOtorisasiPTPP.vue'),
    meta: {
      requiresAuth: true,
    },
  },
];
