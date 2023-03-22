const EleventyFetch = require('@11ty/eleventy-fetch');

let PROJECT_ID = 'irv9pire';
let DATASET = 'production';
let QUERY = encodeURIComponent(
	'*[_type == "members"] | order(postedDate desc) { name, roles, "portraitUrl": portrait.asset->url, bio, email, website_url, website_name}'
);
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

module.exports = async function () {
	return EleventyFetch(URL, {
		directory: '.cache',
		duration: '1d',
		type: 'json',
	});
};
