module.exports = {
	devServer: {
		host: 'kingkai.test'
	},
	pwa: {
		name: 'KingKai',
		themeColor: '#2d3748',
		msTileColor: '#2d3748',
		appleMobileWebAppCapable: 'no',
		appleMobileWebAppStatusBarStyle: 'default',
		manifestPath: 'manifest.json',
		workboxPluginMode: 'InjectManifest',
		workboxOptions: {
			// swSrc is required in InjectManifest mode.
			swSrc: 'service-worker.js',
			// ...other Workbox options...
			exclude: [/\.map$/, /_redirects/],
		}
	}
}