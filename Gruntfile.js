var RewirePlugin = require("rewire-webpack");


module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-bowercopy');
	grunt.loadNpmTasks('grunt-exec');

	grunt.initConfig({
		webpack: {
			trackr: {
				entry: "./src/js/index.js",
				output: {
					path: "release/js",
					filename: "bundle.js"
				},
				plugins: [
					new RewirePlugin()
				]
			}
		},
		watch: {
			src: {
				files: [
					'src/js/**/*.js',
					'src/index.html'
				],
				tasks: ['default'],
				options: {
					interrupt: true
				}
			}
		},
		bowercopy: {
			trackr: {
				options: {
					destPrefix: "src",
					srcPrefix: "bower_components"
				},
				files: {
					'css/bootstrap/bootstrap.min.css': 'bootstrap/dist/css/bootstrap.min.css'
				}
			},
			release: {
				options: {
					destPrefix: "release",
					srcPrefix: "bower_components"
				},
				files: {
					'css/bootstrap/bootstrap.min.css': 'bootstrap/dist/css/bootstrap.min.css'
				}
			}
		},
		exec: {
			cpForBuild: 'cp src/index.html release/index.html && cp -r src/js/Partials/ release/js/Partials/',
		}
	});

	grunt.registerTask("default", ["webpack", "bowercopy", 'exec']);
	grunt.registerTask("build", ["default"]);
	grunt.registerTask("dev", ["default", 'watch']);
}