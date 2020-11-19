module.exports = {
	devServer: {
		open: true,
		proxy: 'https://danjuanfunds.com'
		// proxy: {
		// 	'/djapi': {
		// 		target: 'https://danjuanfunds.com',
		// 		ws: true,
		// 		changeOrigin: true,
		// 		pathRewrite: {
		// 			'^/djapi': ''
		// 		}
		// 	}
		// }
	}
}