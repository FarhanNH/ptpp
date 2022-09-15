export default [
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/profile/Profile.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];
