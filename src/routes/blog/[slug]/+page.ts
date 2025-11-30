import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { ContentModule } from '$lib/types';

const contentFiles = import.meta.glob<ContentModule>(`/src/content/*.{md,svx}`, {
	eager: true
});

export const load: PageLoad = async ({ data, params }) => {
	try {
		const fullPath = Object.keys(contentFiles).find((path) => path.endsWith(`/${data.filename}`));

		return {
			metadata: data,
			content: contentFiles[fullPath!].default
		};
	} catch {
		error(404, `Could not find ${params.slug}`);
	}
};
