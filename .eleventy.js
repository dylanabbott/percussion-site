const { toHTML, escapeHTML } = require('@portabletext/to-html');
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
		const members = collectionApi.items[0].data.members.result.sort(function (a,b) {
			if (a.name < b.name) { return -1;}
			if (a.name > b.name) { return 1;}
			return 0;
		});
		return members;
	});

	eleventyConfig.addCollection('cases', (collectionApi) => {
		const cases = collectionApi.items[0].data.cases.result;
		return cases;
	});

	eleventyConfig.addCollection('caseStudies', (collectionApi) => {
		const caseStudies = collectionApi.items[0].data.caseStudies.result;
		return caseStudies;
	});

	eleventyConfig.addCollection('sectionContent', (collectionApi) => {
		const sectionContent = collectionApi.items[0].data.sectionContent.result;
		return sectionContent;
	});

	eleventyConfig.addCollection('blog', (collectionApi) => {
		const blog = collectionApi.items[0].data.blog.result;
		return blog;
	});

	eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

	eleventyConfig.addFilter('shortDate', (date) => {
		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		};
		const shortDate = new Date(date).toLocaleString('en-US', options);
		return shortDate;
	});

	eleventyConfig.addFilter('richText', function (blocks) {
		const types = {
			types: {
				image: ({ value }) =>
					html`<img
						src="${value.asset.url}?w=800"
						alt="${value.alt}"
						width="800"
						height="${(value.asset.metadata.dimensions.height /
							value.asset.metadata.dimensions.width) *
						800}"
					/>`,
				pullQuote: ({ value }) =>
					html`<div class="case-single__pullquote">
						<blockquote>${value.quote}</blockquote>
						<cite>${value.cite}</cite>
					</div>`,
				textWithIcon: ({ value }) =>
					html`<div class="case-single__icon">
						<img
							src="${value.iconUrl}"
							alt="${value.alt}"
							width="50"
							height="50"
						/>
					</div>`,
				bodyImage: ({ value }) =>
					html`<img
						src="${value.asset.url}"
						alt="${value.alt}"
						class="image-inline"
					/>`,
			},
			marks: {
				span: ({ children, value }) =>
					html`<span id="${value.spanID}">${children}</span>`,
				link: ({ children, value }) =>
					html`<a href="${value.url}">${children}</a>`,
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
