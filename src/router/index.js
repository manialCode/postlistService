import { createRouter, createWebHistory } from "vue-router";
import AboutViewVue from "@/views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import error_404_view from "@/views/error_404_view.vue";
import PostListView from "../views/PostListView.vue";
import PostDetailView from "../views/PostDetailView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/about",
		name: "about",
		component: AboutViewVue,
	},
	{
		path: "/post_list",
		name: "posts",
		component: PostListView,
	},
	{
		path: "/post_detail/:id",
		name: "PostDetail",
		component: PostDetailView,
	},
	{
		path: "/:pathMatch(.*)*",
		component: error_404_view,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
