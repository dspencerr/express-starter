module.exports = buildHtmlTemplates;

function buildHtmlTemplates(src, dest){
	return {
		options: {
			separator: "\n\n",
			process: function(src, filepath) {
				var id = filepath.slice(filepath.lastIndexOf('/') + 1, filepath.length);
				var html = "";
				html += '<script type="text/ng-template" id="'+id+'">'+"\n";
				html += src;
				html += "\n"+'</script>';
				return html;
			}
		},
		src: ['./'+src],
		dest: './'+dest+'/templates.html'
	}
}