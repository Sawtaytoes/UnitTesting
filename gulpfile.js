var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	cucumber = require('gulp-cucumber');

class Task {
	constructor(options = {}) {
		this.options = Object.assign({
			name: 'default',
			files: '',
			watchFiles: [''],
			root: '',
			run: () => {}
		}, options);

		this.task = this.options.name;
		this.watchTask = `${this.options.name}.watch`;

		this.root = this.options.root || `${this.options.name}/`;
		this.files = this.root + this.options.files;
		this.watchFiles = this.options.watchFiles.map(
			dir => this.root + dir
		);

		this.run = this.options.run.bind(this);
	}

	runWatch() {
		tasks.cucumber.run();
		gulp.watch(tasks.cucumber.watchFiles, tasks.cucumber.run);
	}
}

var handleError = err => {
	console.error(err);
}

var tasks = {
	default: new Task(),
	cucumber: new Task({
		name: 'cucumber',
		files: 'features/*',
		watchFiles: [
			'*.js',
			'features/*.feature',
			'steps/*.js'
		],
		run: function() {
			console.log('\n\n===============================================\n\n');

			gulp.src(this.files)
				.pipe(plumber({ errorHandler: () => {} }))
				.pipe(cucumber({
					'steps': this.root + 'steps/*.js',
					'format': 'progress'
				}))
		}
	})
};

gulp.task(tasks.default.task, [tasks.cucumber.watchTask]);

gulp.task(tasks.cucumber.task, tasks.cucumber.run);
gulp.task(tasks.cucumber.watchTask, tasks.cucumber.runWatch);
