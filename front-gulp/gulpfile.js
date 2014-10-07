var fs             = require('fs'),
    Promise        = require('promise'),
    gulp           = require('gulp'),
    del            = require('del'),
    mainBowerFiles = require('main-bower-files'),
    url            = require('url'),
    $              = require('gulp-load-plugins')();

var eachModule = function(closure, cb) {
  var rootDir = './app/modules';
  var dirs, file, filePath, files, stat, _i, _len;
  files = fs.readdirSync(rootDir);
  dirs = [];
  for (_i = 0, _len = files.length; _i < _len; _i++) {
    file = files[_i];
    if (file[0] !== '.') {
      filePath = "" + rootDir + "/" + file;
      stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        dirs.push(file);
      }
    }
  }
  for(var moduleIndex = 0; moduleIndex <= dirs.length; moduleIndex++) {
    if(moduleIndex === dirs.length) {
      cb();
    } else {
      closure(dirs[moduleIndex]);
    }
  };
};

var bowerFiles = {
  scripts: function() {
    var fileRegEx = (/.*\.js$/i);
    var files = mainBowerFiles({filter: fileRegEx});
    return files;
  },
  styles: function() {
    var fileRegEx = (/.*\.css$/i);
    var files = mainBowerFiles({filter: fileRegEx});
    return files;
  },
  fonts: function() {
    var fileRegEx = (/.*\.(?:eot|woff|ttf|svg)$/i);
    var files = mainBowerFiles({filter: fileRegEx});
    return files;
  },
  images: function() {
    var fileRegEx = (/.*\.(?:jpg|png|gif)$/i);
    var files = mainBowerFiles({filter: fileRegEx});
    return files;
  }
}

var vendorScripts = function() {
  return new Promise(function (fulfil) {
    $.util.log('-scripts');
    gulp.src(['vendor/**/*.js'].concat(bowerFiles.scripts()))
      .pipe($.concat('lib.js'))
      .pipe(gulp.dest('./builds/development/scripts'))
      .pipe($.uglify())
      .pipe(gulp.dest('./builds/production/scripts'))
      .on('end', fulfil);
  });
};

var vendorStyles = function() {
  return new Promise(function (fulfil) {
    $.util.log('-styles');
    gulp.src(['vendor/**/styles/*'].concat(bowerFiles.styles()))
      .pipe($.concat('lib.css'))
      .pipe($.minifyCss({
        keepSpecialComments: 0
      }))
      .pipe(gulp.dest('./builds/development/styles'))
      .pipe(gulp.dest('./builds/production/styles'))
      .on('end', fulfil);
  });
};

var vendorFonts = function() {
  return new Promise(function (fulfil) {
    $.util.log('-fonts');
    gulp.src(['vendor/**/fonts/**/*'].concat(bowerFiles.fonts()))
      .pipe($.flatten())
      .pipe(gulp.dest('./builds/development/fonts'))
      .pipe(gulp.dest('./builds/production/fonts'))
      .on('end', fulfil);
  });
};

var vendorImages = function() {
  return new Promise(function (fulfil) {
    $.util.log('-images');
    gulp.src(['vendor/**/images/**/*'].concat(bowerFiles.images()))
      .pipe($.flatten())
      .pipe(gulp.dest('./builds/development/images'))
      .pipe(gulp.dest('./builds/production/images'))
      .on('end', fulfil);
  });
};

var vendor = function() {
  return new Promise(function (fulfil) {
    $.util.log('Rebuilding vendor and bower assets');
    vendorScripts()
    .then(vendorStyles)
    .then(vendorImages)
    .then(vendorFonts)
    .then(fulfil);
  });
};

var clean = function (paths) {
  return new Promise(function (fulfil) {
    $.util.log('Clear:');
    paths.forEach(function(path) {
      $.util.log('-' + path);
    });
    del(paths, fulfil);
  });
};

var indexHtml = function () {
  return new Promise(function (fulfil) {
    $.util.log('Rebuilding index.html');
    gulp.src('./app/index.html')
      .pipe(gulp.dest('./builds/development'))
      .pipe($.htmlmin({
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyJS: true,
        minifyCSS: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeComments: true
      }))
      .pipe(gulp.dest('./builds/production'))
      .on('end', fulfil);
    });
};

var scripts = function() {
  return new Promise(function (fulfil) {
    $.util.log('Rebuilding app scripts');
    gulp.src(['app/config.js', 'app/app.js', 'app/**/*module.js', 'app/**/config/*.js', 'app/**/*.js'])
      .pipe($.jshint())
      .pipe($.jshint.reporter('default'))
      .pipe($.sourcemaps.init())
        .pipe($.concat('app.js'))
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest('./builds/development/scripts'))
      .pipe($.uglify())
      .pipe(gulp.dest('./builds/production/scripts'))
      .on('end', fulfil);
    });
};

var styles = function() {
  return new Promise(function (fulfil) {
    $.util.log('Rebuilding app styles');
    gulp.src(['app/**/styles/*.css'])
      .pipe($.concat('app.css'))
      .pipe(gulp.dest('./builds/development/styles'))
      .pipe($.minifyCss({
        keepSpecialComments: 0
      }))
      .pipe(gulp.dest('./builds/production/styles'))
      .on('end', fulfil);
    });
};

var imagesModules = function() {
  return new Promise(function (fulfil) {
    eachModule(function(module) {
      $.util.log('-' + module);
      gulp.src(['app/modules/' + module + '/images/*'])
        .pipe(gulp.dest('./builds/development/images/' + module))
        .pipe(gulp.dest('./builds/production/images/' + module))
    }, fulfil);
  });
};

var imagesShared = function() {
  return new Promise(function (fulfil) {
    $.util.log('-shared');
    gulp.src(['app/shared/images/*'])
      .pipe($.flatten())
      .pipe(gulp.dest('./builds/development/images/shared'))
      .pipe(gulp.dest('./builds/production/images/shared'))
      .on('end', fulfil);
  });
};

var images = function() {
  return new Promise(function (fulfil) {
    $.util.log('Rebuilding app images');
    imagesModules()
    .then(imagesShared)
    .then(fulfil);
  });
}

var fontsModules = function() {
  return new Promise(function (fulfil) {
    $.util.log('Rebuilding app fonts');
    eachModule(function(module) {
      $.util.log('-' + module);
      gulp.src(['app/modules/' + module + '/fonts/*'])
        .pipe(gulp.dest('./builds/development/fonts/' + module))
        .pipe(gulp.dest('./builds/production/fonts/' + module))
    }, fulfil);
  });
};

var fontsShared = function() {
  return new Promise(function (fulfil) {
    $.util.log('-shared');
    gulp.src(['app/shared/fonts/*'])
      .pipe($.flatten())
      .pipe(gulp.dest('./builds/development/fonts/shared'))
      .pipe(gulp.dest('./builds/production/fonts/shared'))
      .on('end', fulfil);
  });
};

var fonts = function() {
  return new Promise(function (fulfil) {
    fontsModules()
    .then(fontsShared)
    .then(fulfil);
  });
}

var templates = function () {
  return new Promise(function (fulfil) {
    $.util.log('Rebuilding app templates');
    eachModule(function(module) {
      $.util.log('-' + module);
      gulp.src('app/modules/' + module + '/templates/*.html')
        .pipe($.htmlmin({
          collapseWhitespace: true,
          conservativeCollapse: true,
          minifyJS: true,
          minifyCSS: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeComments: true
        }))
        .pipe($.angularTemplatecache({
            module: module,
            base: function(file) {
                var splitPath = file.relative.split('/');
                return splitPath[splitPath.length - 1];
            }
          }))
        .pipe(gulp.dest('./builds/development/scripts'))
        .pipe($.uglify())
        .pipe(gulp.dest('./builds/production/scripts'));
    }, fulfil);
  });
};

var startServer = function(){
  return new Promise(function (fulfil) {
    gulp.src('./builds/development')
      .pipe($.webserver({
        port: 9000,
        livereload: true,
        fallback: 'index.html',
        proxies: [
          {
            source: '/api', target: 'http://localhost:3000/'
          }
        ]
      }))
      .on('end', fulfil);
    });
};

var watchFiles = function() {
  $.util.log('Watching files');
  $.watch('app/index.html', function(files) {
    clean(['builds/**/index.html'])
    .then(indexHtml);
  });
  $.watch('app/**/templates/*.html', function(files) {
    clean(['builds/**/scripts/templates.js'])
    .then(templates);
  });
  $.watch('app/**/*.js', function(files) {
    clean(['builds/**/scripts/app.js'])
    .then(scripts);
  });
  $.watch('app/**/*.css', function(files) {
    clean(['builds/**/styles/app.css'])
    .then(styles);
  });
  $.watch('app/**/fonts/*', function(files) {
    clean(['builds/**/fonts/**/*'])
    .then(fonts);
  });
  $.watch(['./bower.json', 'vendor/**/*'], function(files) {
    clean([
      'builds/**/scripts/lib.js',
      'builds/**/styles/lib.css',
      'builds/**/fonts/*',
      'builds/**/images/*'
    ])
    .then(vendor);
  });
};

gulp.task('default',
  function() {
    clean(['builds'])
    .then(scripts)
    .then(templates)
    .then(styles)
    .then(images)
    .then(fonts)
    .then(indexHtml)
    .then(vendor)
    .then(startServer)
    .then(watchFiles);
  }
);