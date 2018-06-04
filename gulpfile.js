var gulp = require('gulp');
var shell = require('gulp-shell');

// 运行项目
gulp.task('default', shell.task([
  'npm run dev'
]));

// 项目编译
gulp.task('build', shell.task([
   'npm run build'
]));
// 编译后提交
gulp.task('gls', shell.task([
   'git add -A && git commit -m"编译文件" && git pull && git push'
]));