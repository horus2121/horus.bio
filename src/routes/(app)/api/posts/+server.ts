import type { Post } from '$types';
import { json } from '@sveltejs/kit';

export async function GET() {
	const posts = await getPosts();

	return json(posts);
}

async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/pages/posts/*.md', {
		eager: true
	});

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (
			file &&
			typeof file === 'object' &&
			'metadata' in file &&
			slug
		) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			posts.push(post);
		}
	}

	posts = posts.sort(
		(a, b) =>
			new Date(b.date).getTime() -
			new Date(a.date).getTime()
	);

	return posts;
}
