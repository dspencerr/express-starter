module.exports = loadMinifyTasks;

function loadMinifyTasks(grunt, manifest){

	var jsFiles = [];
	manifest.js.file_list.forEach(function (file) {
		jsFiles.push('./assets'+file);
	});
	grunt.config.set('uglify', {
		options: {
			mangle: false
		},
		my_target: {
			files: {
				'./assets/prod/application.js': jsFiles
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');



	var cssFiles = [];
	manifest.css.file_list.forEach(function (file) {
		cssFiles.push('./assets'+file);
	});
	grunt.config.set('cssmin', {
		options: {
			shorthandCompacting: false,
			roundingPrecision: -1
		},
		target: {
			files: {
				'./assets/prod/application.css': cssFiles
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
}


