//libraries
import { createRouter, createWebHistory } from "vue-router";

//create routes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue")
    },
    {
      path: "/home",
      name: "homeSecondary",
      component: () => import("../views/HomeView.vue")
    },
    {
      path: "/about-me",
      name: "aboutMe",
      component: () => import("../views/AboutMeView.vue")
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue")
    },
    {
      path: "/projects/:project",
      name: "projectView",
      component: () => import("../views/SpecificProjectView.vue")
    },
    {
      path: "/social",
      name: "social",
      component: () => import("../views/SocialView.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      name: "err_404",
      component: () => import("../views/Error404View.vue")
    }
  ]
});

//export routes
export default router;
