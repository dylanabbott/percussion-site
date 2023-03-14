module.exports = (eleventyConfig) => {
	// Pass through static assets and bundled CSS
	eleventyConfig.addPassthroughCopy('./src/style/style.css');
	eleventyConfig.addPassthroughCopy('./src/style/style.css.map');
	eleventyConfig.addPassthroughCopy('./src/js/*');
	eleventyConfig.addPassthroughCopy('./src/img/*');
	eleventyConfig.addPassthroughCopy('./src/admin');
	eleventyConfig.addPassthroughCopy('./src/.forestry');
	eleventyConfig.addPassthroughCopy('./src/uploads');


	// Add sorted collection of members
	eleventyConfig.addCollection('membersSorted', function (collectionApi) {
		return collectionApi.getFilteredByTag('members').sort(function (a, b) {
			if (a.data.name < b.data.name) {
				return -1;
			}
			if (a.data.name > b.data.name) {
				return 1;
			}
			return 0;
		});
	});

	// Add sorted collection of sections
	eleventyConfig.addCollection('sectionsSorted', function (collectionApi) {
		return collectionApi.getFilteredByTag('section').sort(function (a, b) {
			return a.data.order - b.data.order;
		});
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
