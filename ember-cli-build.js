/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  
   //BOOTSTRAP
    app.import('bower_components/bootstrap/dist/css/bootstrap.css');
    app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', {
        destDir: 'assets'
    });
    app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', {
        destDir: 'fonts'
    });
    app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', {
        destDir: 'fonts'
    });
    app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', {
        destDir: 'fonts'
    });
    app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
        destDir: 'fonts'
    });
    app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', {
        destDir: 'fonts'
    });
    app.import('bower_components/bootstrap/dist/js/bootstrap.js');

  
  
  /*
    //cloudinary
    app.import('bower_components/blueimp-load-image/js/load-image.all.min.js');
    app.import('bower_components/blueimp-file-upload/js/vendor/jquery.ui.widget.js');

    app.import('bower_components/blueimp-file-upload/js/jquery.iframe-transport.js');
    app.import('bower_components/blueimp-file-upload/js/jquery.fileupload.js');
    app.import('bower_components/blueimp-file-upload/js/jquery.fileupload-process.js');
    app.import('bower_components/blueimp-file-upload/js/jquery.fileupload-image.js');
    app.import('bower_components/cloudinary/js/jquery.cloudinary.js')
  */
  return app.toTree();
};
