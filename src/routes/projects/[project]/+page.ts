import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { projects } from "$lib/assets/content.json";

export const ssr = false;
export const csr = true;
export const prerender = false;

export const load = (({ params }) => {
	const project = projects.find((element) => element.share == params.project);

	if (project == undefined) throw error(404, "Not Found");

	return project;
}) satisfies PageLoad;
