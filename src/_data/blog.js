const EleventyFetch = require('@11ty/eleventy-fetch');

let PROJECT_ID = 'irv9pire';
let DATASET = 'production';
let QUERY = encodeURIComponent(
	'*[_type == "blog"] | order(postedDate desc) { "date": _createdAt, title, subtitle, author->{name, portrait{asset->{url}}}, tags[], pullQuote, "imageUrl": featuredImage.asset->url, featuredImage, content[]{..., asset->}}'
);
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

module.exports = async function () {
	return EleventyFetch(URL, {
		directory: '.cache',
		duration: '30s',
		type: 'json',
	});
};
