# Simple Project Boilerplate

This is my mini-bolierplate starting setup for every HTML+CSS+JS front-end projects.
Instead of starting everytime from scratch with the same repetive little setup actions, this little projects will save a ton of time.
I use VS Code as IDE so this boilerplate is based on the workflow with it.

## Quickstart

You will need some stuff on your installation: first of all Gulp 4.
* Clone or download this Git repository
* Install Node.js
* Run `npm install gulp-cli -g` (for a global installation)
* Init in your folder: `npm init -y`
* Install: 
  * babel pre-fixer: `npm install @babel/core @babel/preset-env`
  * postcss: `npm install postcss --save-dev`
  * autoprefixer: `npm install autoprefixer --save-dev`
  * browser-sync: `npm install browser-sync --save-dev`
  * cssnano: `npm install cssnano --save-dev`
  * dart-sass: `npm install dart-sass --save-dev`
  * sass: `npm install sass --save-dev`
  * gulp: `npm install gulp --save-dev`
  * gulp-rename: `npm install gulp-rename --save-dev`
  * gulp-babel: `npm install gulp-babel --save-dev`  
  * gulp-postcss: `npm install gulp-postcss --save-dev`
  * gulp-sass: `npm install gulp-sass --save-dev`
  * gulp-terser: `npm install gulp-terser --save-dev`
* Or in a single line: `npm install @babel/core @babel/preset-env postcss autoprefixer browser-sync cssnano dart-sass sass gulp gulp-rename gulp-babel gulp-postcss gulp-sass gulp-terser --save-dev`
* Simply run: `gulp` from the terminal

PS: if you see vulnerability in your log simple do a `npm audit fix` to resolve them.