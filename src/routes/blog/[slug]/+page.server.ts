import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getPosts } from '$lib/posts';

export const load: PageServerLoad = async ({ params }) => {
	const posts = await getPosts();
	const post = posts.filter((p) => p.slug === params.slug)[0];

	if (post) {
		return post;
	}

	error(404, 'Not found');
};
