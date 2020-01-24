var gulp = require("gulp"),
  connect = require("gulp-connect"),
  less = require("gulp-less"),
  path = require("path"),
  config = require("./gulp.config"),
  runSequence = require("gulp4-run-sequence"),
  rename = require("gulp-rename"),
  inject = require("gulp-inject"),
  uglify = require("gulp-uglify"),
  cleanCSS = require("gulp-clean-css"),
  concat = require("gulp-concat"),
  clean = require("gulp-clean"),
  minifyCSS = require("gulp-clean-css"),
  autoprefixer = require("gulp-autoprefixer");

gulp.task(
  "copy-html",
  gulp.series(function (done) {
    gulp
      .src(config.app.baseHtml)
      //.pipe(rename("index.html"))cls
      .pipe(gulp.dest(config.dist.base));
    done();
  })
);

gulp.task(
  "copy-manifest",
  gulp.series(function (done) {
    gulp
      .src(config.app.manifest)
      //.pipe(rename("index.html"))
      .pipe(gulp.dest(config.dist.base));
    done();
  })
);

gulp.task(
  "copy-assets",
  gulp.series(function (done) {
    gulp.src(config.app.assets).pipe(gulp.dest(config.dist.assets));
    done();
  })
);

gulp.task(
  "compile-scripts",
  gulp.series(function (done) {
    gulp
      .src(config.app.scripts)
      .pipe(concat("scripts.min.js"))
      //.pipe(uglify())
      .pipe(gulp.dest(config.dist.scripts));
    gulp
      .src(config.app.scriptsWorker)
      .pipe(concat("service-worker.js"))
      .pipe(gulp.dest(config.dist.scripts));

    done();
  })
);

gulp.task(
  "compile-libs",
  gulp.series(function (done) {
    gulp
      .src(config.app.compiledLibsStyles)
      .pipe(concat("libs.min.css"))
      .pipe(gulp.dest(config.dist.libs));

    gulp
      .src(config.app.compiledLibsScripts)
      .pipe(concat("libs.min.js"))
      .pipe(gulp.dest(config.dist.libs));

    done();
  })
);

gulp.task(
  "compile-fonts",
  gulp.series(function (done) {
    gulp.src(config.app.compiledLibsFonts).pipe(gulp.dest(config.dist.fonts));
    done();
  })
);

gulp.task(
  "compile-styles",
  gulp.series(function (done) {
    var result = gulp
      .src(config.app.less)
      .pipe(
        less({
          paths: [path.join(__dirname, "less", "includes")]
        })
      )
      .pipe(gulp.dest(config.dist.base))
      .pipe(
        cleanCSS({
          compatibility: "ie8"
        })
      )
      .pipe(minifyCSS())
      .pipe(autoprefixer("last 2 version", "safari 5", "ie 8", "ie 9"))
      .pipe(gulp.dest(config.dist.base));

    done();
    return result;
  })
);

gulp.task(
  "css-min",
  gulp.series(function () {
    gulp
      .src(config.dist.base + "/styles/**/*.css")
      .pipe(minifyCSS())
      .pipe(autoprefixer("last 2 version", "safari 5", "ie 8", "ie 9"))
      .pipe(concat("style.min.css"))
      .pipe(gulp.dest(config.dist.base));
  })
);

/* INJECT */
gulp.task(
  "inject",
  gulp.series(function (done) {
    var target = gulp.src(config.dist.allHtml);
    var sources = gulp.src(config.dist.compiledSources, {
      read: false,
      allowEmpty: true
    });
    var stream = target
      .pipe(
        inject(sources, {
          relative: true
        })
      )
      .pipe(gulp.dest("dist"));
    done();
    return stream;
  })
);

gulp.task(
  "compile",
  gulp.series(function (callback) {
    runSequence(
      [
        "copy-html",
        "compile-libs",
        "copy-assets",
        "compile-scripts",
        "compile-styles",
        "compile-fonts",
        "copy-manifest"
      ],
      "inject",
      callback
    );
  })
);

gulp.task(
  "clean",
  gulp.series(function () {
    return gulp
      .src(config.dist.base, {
        read: false
      })
      .pipe(clean());
  })
);

gulp.task("watch", function (cb) {
  gulp.watch(config.app.base, gulp.series(["clean", "compile"]));
  cb();
});

gulp.task(
  "serve",
  gulp.series(["compile", "watch"], function () {
    connect.server({
      name: "Dev App",
      root: ["dist", "app"],
      port: 8086,
      livereload: true
    });
  })
);