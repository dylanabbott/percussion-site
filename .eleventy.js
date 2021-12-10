module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy('./src/style/style.css');
    eleventyConfig.addPassthroughCopy('./src/style/style.css.map');
    eleventyConfig.addPassthroughCopy('./src/js/*');
    eleventyConfig.addPassthroughCopy('./src/admin/*');
    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "_site",
        }
    }
}