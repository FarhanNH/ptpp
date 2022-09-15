export default [
  {
    path: "/user",
    name: "User",
    component: () => import("@/views/user/User.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/user/edit",
    name: "Edit User",
    component: () => import("@/views/user/EditUser.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];
