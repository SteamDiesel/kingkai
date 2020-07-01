module.exports = {
	devServer: {
		host: 'localhost'
	},
	pwa: {
		name: 'KingKai',
		themeColor: '#1A202C',
		msTileColor: '#1A202C',
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