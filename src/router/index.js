import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Explore from "../views/Explore.vue";
import EventPage from "../views/Event/EventPage.vue";
import Test from "../views/Test.vue";
import VendorDashboard from "../views/Vendor/Dashboard.vue";
import Categories from "../views/Categories.vue";
import Vendor from "../views/Vendor.vue";
import ProductDetail from "../views/ProductDetail.vue";

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
    path: "/event-plan/:eventId",
    name: "Event Plan",
    component: EventPage
    // children: [
    //   {
    //     path: "/:orderType",
    //     component: Vendor
    //   }
    // ]
  },
  {
    path: "/test",
    name: "Test",
    component: Test
  },
  {
    path: "/vendor/dashboard",
    name: "VendorDashboard",
    component: VendorDashboard
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories
  },
  {
    path: "/vendor",
    name: "Vendor",
    component: Vendor
  },
  {
    path: "/detail",
    name: "ProductDetail",
    component: ProductDetail
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
