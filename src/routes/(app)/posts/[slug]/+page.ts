import type { Post } from '$types';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(
			`../../../../pages/posts/${params.slug}.md`
		);

		return {
			content: post.default,
			metadata: post.metadata
		};
	} catch (err) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
