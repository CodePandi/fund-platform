import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // name: "Home",
    component: Home,
    children: [
      {
        redirect: "dashboard",
        path: "/",
        component: () => import("../views/Dashboard.vue"),
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("../views/Dashboard.vue"),
      },
      {
        path: "fundGroupList",
        name: "FundGroupList",
        component: () => import("../views/FundGroupList.vue"),
      },
      {
        path: "fundStatisticsList",
        name: "FundStatisticsList",
        component: () => import("../views/FundStatisticsList.vue"),
      }
    ],
  },
  {
    // path: "/about/:id",
    path: "/abc-*",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    props: true,
    meta: {
      title: "about",
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = "fund-platform";
  }
  next();
});

router.afterEach((to, from) => {});

export default router;
