/**
 * Clean
 */
function loadCleaner(grunt){
	grunt.config.set('clean', {
		clean: ['./public/prod/']
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
}



/**
 * UGLIFY AND MAKE MIN
 */
var loadMinifyTasks = require('./tasks/minAndUgg');


/**
 * CONCATENATING FILES
 */
function loadConcatTasks(grunt, manifest){
	var templates = require('./tasks/buildHtmlTemplates');
	var librariesJS = require('./tasks/buildJsLibraries');
	var librariesCSS = require('./tasks/buildCssLibraries');

	grunt.config.set('concat', {
		templates: templates(manifest.html.templates, 'public/prod'),
		jsLibraries: librariesJS(manifest.js.libraries, 'public/prod'),
		cssLibraries: librariesCSS(manifest.css.libraries, 'public/prod')
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
}


/**
 * BUILD SCRIPT & LINK TAGS
 */
function loadLinkTasks(grunt, manifest){
	var tags = require('./tasks/makeTags');

	var cssFiles = manifest.css.development.concat(manifest.css.file_list);
	var jsFiles  = manifest.js.development.concat(manifest.js.file_list);

	grunt.config.set('tags', {
		cssDev: tags('css', cssFiles, './public/prod/links.html'),
		jsDev: tags('js', jsFiles, './public/prod/scripts.html'),
		cssProd: tags('css', manifest.css.production, './public/prod/links.html'),
		jsProd: tags('js', manifest.js.production, './public/prod/scripts.html')
	});
	grunt.loadNpmTasks('grunt-build-tagslist');
}


/**
 * WATCHERS
 */
function loadWatchers(grunt, manifest){
	var jsFiles = [];
	manifest.js.file_list.forEach(function (file) {
		jsFiles.push('./public'+file);
	});
	var cssFiles = [];
	manifest.css.file_list.forEach(function (file) {
		cssFiles.push('./public'+file);
	});

	grunt.config.set('watch', {
		options:{

		},
		public: {
			files: manifest.html.templates.concat(cssFiles),
		  tasks: ['default']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
}

/**
 * GRUNT INIT
 */
function gruntInit(grunt) {

	var manifest = grunt.file.readJSON('public/manifest.json');
	loadCleaner(grunt);
	loadMinifyTasks(grunt, manifest);
	loadConcatTasks(grunt, manifest);
	loadLinkTasks(grunt, manifest);
	loadWatchers(grunt, manifest);

	grunt.registerTask('default', [
		'clean',
		'concat:templates',
		'concat:jsLibraries',
		'concat:cssLibraries',
		'tags:cssDev',
		'tags:jsDev',
		'watch'
	]);

	grunt.registerTask('prod', [
		'clean',
		'cssmin',
		'uglify',
		'concat:templates',
		'concat:jsLibraries',
		'concat:cssLibraries',
		'tags:cssProd',
		'tags:jsProd'
	]);

}

module.exports = gruntInit;