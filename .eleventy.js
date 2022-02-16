module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy('./src/style/style.css');
    eleventyConfig.addPassthroughCopy('./src/style/style.css.map');
    eleventyConfig.addPassthroughCopy('./src/js/*');
    eleventyConfig.addPassthroughCopy('./src/img/*');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./src/.forestry');
    eleventyConfig.addPassthroughCopy('./uploads')
    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "_site",
        }
    }
}