var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	browserSync = require('browser-sync').create();
	concat      = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify      = require('gulp-uglifyjs'); // Подключаем gulp-uglifyjs (для сжатия JS)
    cssnano     = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename      = require('gulp-rename'); // Подключаем библиотеку для переименования файлов

gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass({includePaths: require('node-normalize-scss').includePaths}))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream());
});

/*gulp.task('scripts', function(){
	return gulp.src(['app/libs/jquery/dist/jquery.min.js', 
		'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
		'app/libs/slick-carousel/slick/slick.min.js',
		'app/libs/wow/dist/wow.min.js'])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});*/

gulp.task('css-libs', ['sass'], function() {
    return gulp.src('app/css/libs.css') // Выбираем файл для минификации
        .pipe(cssnano()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
});

// Static Server + watching scss/html files
gulp.task('watch', ['css-libs'], function(){
	browserSync.init({
        server: "./app"
    });
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html').on('change', browserSync.reload);
	gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
});

gulp.task('default', ['watch']);