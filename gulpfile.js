'use strict';

const gulp = require('gulp');
const electron = require('electron-connect').server.create({path: './dist'});

gulp.task('watch', () => {
    // Electronの起動
    electron.start();
    
    // MainProcessが読み込むリソースが変更されたら, Electron自体を再起動
    gulp.watch(['./dist/main.js'], electron.restart);
    
    // RendererProcessが読み込むリソースが変更されたら, RendererProcessにreloadさせる
    gulp.watch(['./dist/renderer.bundle.js', './dist/*.html'], electron.reload);
});

gulp.task('default', ['watch']);
