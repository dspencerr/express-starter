module.exports = makeCssTags;


function makeCssTags(type, files, dest) {
	return {
		options: {
			type: type
		},
		src: files,
		dest: dest
	}
}