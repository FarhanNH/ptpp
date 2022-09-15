export default [
  {
    path: "/role",
    name: "Role",
    component: () => import("@/views/role/Role.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/role/edit",
    name: "Edit Role",
    component: () => import("@/views/role/EditRole.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];
