module.exports = buildCSS;

function buildCSS(files, dest){
	return {
		options: {
			separator: "\n\n\n\n",
			stripBanners: false
		},
		src: files,
		dest: './'+dest+'/libraries.css'
	};	
}