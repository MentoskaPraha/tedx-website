import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  	// @ts-expect-error
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
    		path: "/blog",
      		name: "blog",
      		component: () => import("../views/BlogView.vue")
    	},
		{
			path: "/error_404",
      		name: "err_404",
      		component: () => import("../views/Error404View.vue")
		},
    	{
      		path: "/:pathMatch(.*)*",
      		name: "Catch all.",
      		redirect: "/error_404"
    	}
  	]
});

export default router;
