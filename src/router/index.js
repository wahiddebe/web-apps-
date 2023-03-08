import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    meta: { logged: true },
    component: Dashboard,
  },
  {
    path: "/visit-history",
    name: "Visit History",
    meta: { logged: true },

    component: () =>
      import(/* webpackChunkName: "membership" */ "../views/VisitHistory.vue"),
  },
  {
    path: "/following",
    name: "Following",
    meta: { logged: true },

    component: () =>
      import(/* webpackChunkName: "membership" */ "../views/Following.vue"),
  },
  {
    path: "/detail-store",
    name: "Detail Store",
    meta: { logged: true },

    component: () =>
      import(/* webpackChunkName: "membership" */ "../views/DetailStore.vue"),
  },
  {
    path: "/all-product",
    name: "All Product",
    meta: { logged: true },

    component: () =>
      import(/* webpackChunkName: "membership" */ "../views/AllProduct.vue"),
  },
  {
    path: "/all-promo",
    name: "All Promo",
    meta: { logged: true },

    component: () =>
      import(/* webpackChunkName: "membership" */ "../views/AllPromo.vue"),
  },
  {
    path: "/all-review",
    name: "All Review",
    meta: { logged: true },

    component: () =>
      import(/* webpackChunkName: "membership" */ "../views/AllReview.vue"),
  },
  {
    path: "/membership",
    name: "Membership",
    meta: { logged: true },

    component: () =>
      import(/* webpackChunkName: "membership" */ "../views/Membership.vue"),
  },
  {
    path: "/membership/checkout",
    name: "Membership Checkout",
    meta: { logged: true },

    component: () =>
      import(
        /* webpackChunkName: "membership" */ "../views/MembershipCheckout.vue"
      ),
  },
  {
    path: "/membership/checkoutstep2",
    name: "Membership Checkout Step 2",
    meta: { logged: true },

    component: () =>
      import(
        /* webpackChunkName: "membership" */ "../views/MembershipCheckout2.vue"
      ),
  },
  {
    path: "/membership/checkoutstep3",
    name: "Membership Checkout Step 3",
    meta: { logged: true },

    component: () =>
      import(
        /* webpackChunkName: "membership" */ "../views/MembershipCheckout3.vue"
      ),
  },
  {
    path: "/profil",
    name: "Profil",
    meta: { logged: true },

    component: () =>
      import(/* webpackChunkName: "Profil" */ "../views/profil/Profil.vue"),
  },
  {
    path: "/profil/information",
    name: "Information",
    meta: { logged: true },

    component: () =>
      import(
        /* webpackChunkName: "Profil" */ "../views/profil/Information.vue"
      ),
  },
  {
    path: "/profil/login-details",
    name: "Login Details",
    meta: { logged: true },

    component: () =>
      import(
        /* webpackChunkName: "Profil" */ "../views/profil/LoginDetails.vue"
      ),
  },
  {
    path: "/profil/notification",
    name: "Notification",
    meta: { logged: true },

    component: () =>
      import(
        /* webpackChunkName: "Profil" */ "../views/profil/Notification.vue"
      ),
  },
  {
    path: "/profil/preference",
    name: "Preference",
    meta: { logged: true },

    component: () =>
      import(/* webpackChunkName: "Profil" */ "../views/profil/Preference.vue"),
  },
  {
    path: "/profil/membership",
    name: "MembershipBill",
    meta: { logged: true },

    component: () =>
      import(/* webpackChunkName: "Profil" */ "../views/profil/Membership.vue"),
  },
  {
    path: "/profil/membership/details",
    name: "Membership Details",
    meta: { logged: true },

    component: () =>
      import(
        /* webpackChunkName: "Profil" */ "../views/profil/MembershipDetails.vue"
      ),
  },
  {
    path: "/profil/scurity",
    name: "Security",
    meta: { logged: true },

    component: () =>
      import(/* webpackChunkName: "Profil" */ "../views/profil/Security.vue"),
  },
  {
    path: "/profil/payment",
    name: "Payment",
    meta: { logged: true },

    component: () =>
      import(/* webpackChunkName: "Profil" */ "../views/profil/Payment.vue"),
  },
  {
    path: "/explore",
    name: "Explore",
    meta: { logged: true },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "explore" */ "../views/Explore.vue"),
  },
  {
    path: "/explore-map",
    name: "Explore Map",
    meta: { logged: true },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "explore" */ "../views/ExploreMap.vue"),
  },
  {
    path: "/map",
    name: "Map",
    meta: { logged: true },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "explore" */ "../views/Maps.vue"),
  },
  {
    path: "/signin",
    name: "Sign In",
    logged: false,
    meta: { logged: false },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "explore" */ "../views/SignIn.vue"),
  },
  {
    path: "/register",
    name: "Sign Up",
    logged: false,
    meta: { logged: false },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "explore" */ "../views/Register.vue"),
  },
  {
    path: "/forgot",
    name: "Forgot Password",
    meta: { logged: false },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "explore" */ "../views/ForgotPassword.vue"),
  },
  {
    path: "/forgototp",
    name: "Forgot OTP",
    meta: { logged: false },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "explore" */ "../views/ForgotOTP.vue"),
  },
  {
    path: "/newpass",
    name: "New Password",
    meta: { logged: false },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "explore" */ "../views/NewPassword.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
