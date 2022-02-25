module.exports = (eleventyConfig) => {
	// Pass through static assets and bundled CSS
	eleventyConfig.addPassthroughCopy('./src/style/style.css');
	eleventyConfig.addPassthroughCopy('./src/style/style.css.map');
	eleventyConfig.addPassthroughCopy('./src/js/*');
	eleventyConfig.addPassthroughCopy('./src/img/*');
	eleventyConfig.addPassthroughCopy('./src/admin');
	eleventyConfig.addPassthroughCopy('./src/.forestry');
	eleventyConfig.addPassthroughCopy('./uploads');

	// Add sorted collection of members
	eleventyConfig.addCollection('membersSorted', function (collectionApi) {
		return collectionApi.getFilteredByTag('members').sort(function (a, b) {
			return a.data.order - b.data.order;
		});
	});

	// Add sorted collection of members
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
