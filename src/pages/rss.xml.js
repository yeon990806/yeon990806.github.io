import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getArticles } from '../utils/content';

export async function GET(context) {
	const posts = await getArticles(false);
	const sorted = posts.sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: sorted.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			categories: post.data.tags,
			link: `/posts/${post.id}/`,
		})),
		customData: `<language>ko-KR</language>`,
		stylesheet: false,
	});
}
