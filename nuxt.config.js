module.exports = {
	/*
	** environment is used to for showing the "i see a bug" button
	** apiDomain is used for selecting the api to use
	*/
	env: {
		environment: 'dev',
    	apiDomain: 'http://localhost:8888/wp-json',
	},
	/*
	** Headers of the page
	*/
	head: {
		title: 'Sepiroth',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Sepiroth' }
		],
	},
	/*
	** Customize the progress bar color
	*/
	loading: { color: '#000000' },
	router: {
		linkActiveClass: 'menu__link--active'
	},
	/*
	** Build configuration
	*/
	// modules: [
	// 	"nuxt-rfg-icon",
	// 	[
	// 		'@nuxtjs/google-analytics',
	// 		{
	// 			id: 'UA-118967949-3'
	// 		}
	// 	]
	// ],
	build: {
		vendor:['url-search-params-polyfill'],
		/*
		** Run ESLint on save
		*/
		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		},
		postcss: {
			plugins: {
				"postcss-cssnext": {
					browsers: [
						"last 2 versions",
						"ie >= 9"
					],
					features: {
						customProperties: false
					}
				}
			}
		},
	},
	plugins: [
	],
	css: [
		{
			src: '~assets/scss/app.scss',
			lang: 'scss'
		}
	]
}
