import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Explore from "../views/Explore.vue";
import EventCreate from "../views/Event/EventCreate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore
  },
  {
    path: "/create-event",
    name: "Create Event",
    component: EventCreate
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const isAuthenticated = () => {
  if (localStorage.getItem("idToken") !== null) return true;
  else return false;
};

router.beforeEach((to, from, next) => {
  if (to.name !== "Homepage" && !isAuthenticated) next({ name: "Homepage" });
  else next();
});

export default router;
