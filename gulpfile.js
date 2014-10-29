var gulp = require("gulp");
var webpack = require("gulp-webpack");
var concat = require("gulp-concat");
var RewirePlugin = require("rewire-webpack");
process.env.NODE_ENV = 'production';


var webpackConfig = {
	loaders: [ // required for react jsx
		{
			test: /\.js$/,
			loader: "jsx-loader"
		}, {
			test: /\.jsx$/,
			loader: "jsx-loader?insertPragma=React.DOM"
		},
	],
	plugins: [
		new RewirePlugin()
	]
}

gulp.task("webpack", function() {
	gulp.src("src/js/main.js")
		.pipe(webpack({
			module: webpackConfig
		}))
		.pipe(concat("main.js"))
		.pipe(gulp.dest("release/js"));
});

gulp.task("copy", function() {
	gulp.src("src/index.html")
		.pipe(gulp.dest("release/"));
	gulp.src("bower_components/bootstrap/dist/css/bootstrap.min.css")
		.pipe(gulp.dest("release/css"));

	gulp.src("bower_components/bootstrap/dist/css/bootstrap.min.css")
		.pipe(gulp.dest('src/css'));
});

gulp.task("watch", function() {
	gulp.watch("src/**/*.*", ["default"]);
});

gulp.task("default", ["webpack", "copy"]);