module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "node_modules/@gouvfr/dsfr/dist/dsfr/": "dsfr/" })
  eleventyConfig.addPassthroughCopy({ "node_modules/@gouvfr/dsfr/dist/fonts/": "fonts/" })
  eleventyConfig.addPassthroughCopy({
    "node_modules/@gouvfr/dsfr/dist/favicon/": "favicon/",
  })
  return {
    dir: {
      input: "src",
      output: "public",
    },
  }
}
