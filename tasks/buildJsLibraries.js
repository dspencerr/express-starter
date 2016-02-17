module.exports = buildJS
	
function buildJS(files, dest) {
	return {
		options: {
			separator: "\n\n\n\n",
			stripBanners: false
		},
		src: files,
		dest: './'+dest+'/libraries.js'
	};
}
	
