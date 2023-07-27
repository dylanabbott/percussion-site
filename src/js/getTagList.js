module.exports = function (collection) {
	let tagSet = new Set();
	tagSet.add('Test');
	collection.getAll()
    // .filter(function (item) {

    // })
    .forEach(function (item) {
        // if (item.data.blog) { tagSet.add(Object.values(item.data.blog.result[0].tags))};
		if (item.data.tags) {
			let tags = item.data.tags;
			if (typeof tags === 'string') {
				tags = [tags];
			}
			for (const tag of tags) {
				tagSet.add(tag);
			}
		}
	});

	// returning an array in addCollection works in Eleventy 0.5.3
	return [...tagSet].sort();
};
