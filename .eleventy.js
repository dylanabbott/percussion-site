const { toHTML } = require('@portabletext/to-html');
const htm = require('htm');
const vhtml = require('vhtml');

const html = htm.bind(vhtml);


module.exports = (eleventyConfig) => {
	// Pass through static assets and bundled CSS
	eleventyConfig.addPassthroughCopy('./src/style/style.css');
	eleventyConfig.addPassthroughCopy('./src/style/style.css.map');
	eleventyConfig.addPassthroughCopy('./src/js/*');
	eleventyConfig.addPassthroughCopy('./src/img/*');
	eleventyConfig.addPassthroughCopy('./src/admin');
	eleventyConfig.addPassthroughCopy('./src/.forestry');
	eleventyConfig.addPassthroughCopy('./src/uploads');

	// // Add sorted collection of members
	// eleventyConfig.addCollection('membersSorted', function (collectionApi) {
	// 	return collectionApi.getFilteredByTag('members').sort(function (a, b) {
	// 		if (a.data.name < b.data.name) {
	// 			return -1;
	// 		}
	// 		if (a.data.name > b.data.name) {
	// 			return 1;
	// 		}
	// 		return 0;
	// 	});
	// });

	// // Add sorted collection of sections
	// eleventyConfig.addCollection('sectionsSorted', function (collectionApi) {
	// 	return collectionApi.getFilteredByTag('section').sort(function (a, b) {
	// 		return a.data.order - b.data.order;
	// 	});
	// });

	eleventyConfig.addCollection('members', (collectionApi) => {
		const members = collectionApi.items[0].data.members.result;
		return members;
	});

	eleventyConfig.addCollection('cases', (collectionApi) => {
		const cases = collectionApi.items[0].data.cases.result;
		return cases;
	});

	eleventyConfig.addCollection('sectionContent', (collectionApi) => {
		const sectionContent = collectionApi.items[0].data.sectionContent.result;
		return sectionContent;
	});

	eleventyConfig.addFilter('richText', function (blocks) {
		const types = {
			types: {
				bodyImage: ({ value }) =>
					html`<img
						src="${value.asset.url}?w=800"
						alt="${value.alt}"
						width="800"
						height="${(value.asset.metadata.dimensions.height /
							value.asset.metadata.dimensions.width) *
						800}"
					/>`,
			},
		};
		return toHTML(blocks, { components: types });
	});

	return {
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dir: {
			input: 'src',
			output: '_site',
		},
	};
};
