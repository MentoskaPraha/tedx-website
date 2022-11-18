import { createRouter, createWebHistory } from "vue-router";
//import projects from "./projectsRouter";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/HomeView.vue")
    },
    {
      path: '/home',
      name: 'homeSecondary',
      component: () => import("../views/HomeView.vue")
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: () => import("../views/AboutMeView.vue")
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'err_404',
      component: () => import("../views/Error404View.vue")
    }
  ]
});

export default router;
