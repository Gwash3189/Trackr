module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-webpack");
    grunt.loadNpmTasks("grunt-bowercopy");
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    var webpackConfig = {};
    webpackConfig.dev = {
        // webpack options
        module: {
            loaders: [ // required for react jsx
                {
                    test: /\.js$/,
                    loader: "jsx-loader?harmony"
                }, {
                    test: /\.jsx$/,
                    loader: "jsx-loader?harmony"
                }
            ]
        },
        entry: "./src/js/main.js",
        output: {
            path: "prod/js",
            filename: "main.js"
        },

        progress: false, // Don't show progress
        // Defaults to true

        failOnError: false, // don't report error to grunt if webpack find errors
        // Use this if webpack errors are tolerable and grunt should continue

        watch: false, // use webpacks watcher
        // You need to keep the grunt process alive

        keepalive: false // don't finish the grunt task
        // Use this in combination with the watch option
    };

    grunt.initConfig({
        bowercopy: {
            trackr: {
                files: {
                    "prod/css/bootstrap.min.css": "bower_components/bootstrap/dist/css/bootstrap.min.css",
                }
            }
        },
        webpack: {
            trackr: webpackConfig.dev
        },
        concat: {
            options: {
                separator: ';'
            },
            css: {
                src: ['src/css/**/*.css'],
                dest: 'prod/css/index.css'
            }
        },
        watch: {
            dev: {
                files: ['src/js/**/*.js', 'src/css/**/*.css', 'src/index.html'],
                tasks: ['default'],
                options: {
                    interrupt: true
                }
            }
        }
    });

    grunt.registerTask("copyIndex", "copy index from src to prod", function () {
        var fs = require('fs-extra');
        fs.copySync('src/index.html', 'prod/index.html');
    });

    grunt.registerTask("node-prod", "set env to prod", function () {
        process.env.NODE_ENV = "production";
    });

    grunt.registerTask("default", ["copyIndex", "concat", "bowercopy", "webpack:trackr", "watch:dev"]);
    grunt.registerTask("prod", ["node-prod", "copyIndex", "bowercopy", "webpack:trackr-prod"]);

};