// Initialize module
const {
  src,
  dest,
  watch,
  series
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Use dart-sass for @use
//sass.compiler = require('dart-sass');

// Sass Task
function STYLEMinCopy() {
  return src('app/scss/style.scss', {
      sourcemaps: true
    })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest('dist/css', {
      sourcemaps: '.'
    }));
}

// JavaScript Task
function JSMinCopy() {
  return src('app/js/script.js', {
      sourcemaps: true
  })
    .pipe(babel({ presets: ['@babel/preset-env']}))
    .pipe(terser())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest('dist/js', {
      sourcemaps: '.'
    }));
}

// Browsersync Tasks
function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: '.'
    },
    notify: {
      styles: {
        top: 'auto',
        bottom: '0',
      },
    },
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch('./*.html', browsersyncReload);
  watch(['app/scss/**/*.scss', 'app/assets/js/**/*.js'],
    series(STYLEMinCopy, JSMinCopy, browsersyncReload));
}

// Default Gulp task
exports.default = series(
  STYLEMinCopy,
  JSMinCopy,
  browsersyncServe,
  watchTask
);