module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs"
  ],
      refs: {
        'apl-html': {
         title: "Austin Public Library Design System",
         url: "https://main--627a85c0461c9c004af159d7.chromatic.com",
         expanded: true // optional, true by default
       }
      },
  staticDirs: ['../public'],
  "framework": "@storybook/html"
}
