const jekyllEnv = process.env.JEKYLL_ENV || 'development'

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./_includes/tailwind.config.js'),
    require('postcss-preset-env'),
    require('autoprefixer'),
  ]
}
