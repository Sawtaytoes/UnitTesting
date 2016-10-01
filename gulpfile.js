var gulp = require('gulp'),
	cucumber = require('gulp-cucumber')

class Task {
	constructor(options = {}) {
		this.options = Object.assign({
			name: 'default',
			files: '',
			watchFiles: [''],
			root: '',
			run: () => {}
		}, options)

		this.task = this.options.name
		this.watchTask = `${this.task}.watch`
		this.files = this.options.root + this.options.files
		this.run = this.options.run.bind(this)
		this.watchFiles = this.options.watchFiles.map(dir => this.options.root + dir)
	}

	runWatch() {
		tasks.cucumber.run()
		gulp.watch(tasks.cucumber.watchFiles, tasks.cucumber.run)
	}
}

var tasks = {
	default: new Task(),
	cucumber: new Task({
		name: 'cucumber',
		root: 'cucumber/features/',
		files: '*',
		watchFiles: [
			'*.feature',
			'steps/*.js'
		],
		run: function() {
			console.log('this.files', this.files);
			gulp.src(this.files)
				.pipe(cucumber({
					'steps': 'features/steps/*.js',
					'format': 'summary'
				}))
		}
	})
}

gulp.task(tasks.default.task, [tasks.cucumber.watchTask])

gulp.task(tasks.cucumber.task, tasks.cucumber.run)
gulp.task(tasks.cucumber.watchTask, tasks.cucumber.runWatch)
