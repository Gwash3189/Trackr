var webpack = require("webpack");
module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-webpack");
    grunt.loadNpmTasks("grunt-bowercopy");
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    var webpackConfig = {};
    webpackConfig.prod = {
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
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                },
                sourceMap: false
            })
        ],
        entry: "./src/js/main.js",
        output: {
            path: "prod/js",
            filename: "main.js"
        },

        progress: true, // Don't show progress
        // Defaults to true

        failOnError: true, // don't report error to grunt if webpack find errors
        // Use this if webpack errors are tolerable and grunt should continue

        watch: false, // use webpacks watcher
        // You need to keep the grunt process alive

        keepalive: true, // don't finish the grunt task
        // Use this in combination with the watch option
        externals: {
            // require("jquery") is external and available
            //  on the global var jQuery
            "jquery": "jQuery"
        }
    };
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

        progress: true, // Don't show progress
        // Defaults to true

        failOnError: false, // don't report error to grunt if webpack find errors
        // Use this if webpack errors are tolerable and grunt should continue

        watch: true, // use webpacks watcher
        // You need to keep the grunt process alive

        keepalive: true, // don't finish the grunt task
        // Use this in combination with the watch option
        externals: {
            // require("jquery") is external and available
            //  on the global var jQuery
            "jquery": "jQuery"
        }
    };

    grunt.initConfig({
        bowercopy: {
            trackr: {
                files: {
                    "prod/css/bootstrap.min.css": "bower_components/bootstrap/dist/css/bootstrap.min.css",
                    "prod/css/font-awesome.min.css": "bower_components/font-awesome/css/font-awesome.min.css",
                    "prod/fonts": "bower_components/font-awesome/fonts",
                    "prod/external/jquery.min.js" : "bower_components/jquery/dist/jquery.min.js",
                    "prod/external/bootstrap.min.js" : "bower_components/bootstrap/dist/js/bootstrap.min.js",
                    "src/external/jquery.min.js" : "bower_components/jquery/dist/jquery.min.js",
                    "src/external/bootstrap.min.js" : "bower_components/bootstrap/dist/js/bootstrap.min.js"
                }
            }
        },
        webpack: {
            dev: webpackConfig.dev,
            prod: webpackConfig.prod
        },
        cssmin: {
            prod: {
                files: {
                    "prod/css/index.css" : ["src/css/**/*.css"]
                }
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

    grunt.registerTask("default", ["copyIndex", "cssmin", "bowercopy"]);
    
    grunt.registerTask("prod", ["node-prod", "copyIndex", "cssmin", "bowercopy", "webpack:prod"]);

};