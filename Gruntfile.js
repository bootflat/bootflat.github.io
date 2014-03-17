module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      dist: {
        files: {
          'js/site.min.js': [
	          'js/jquery-1.10.1.min.js',
	          'js/bootstrap.min.js',
            'js/holder.js',
            'bootflat/js/icheck.min.js',
            'js/application.js'
	        ]
        }
      }
    },
    cssmin: {
      dist: {
        files: {
          'css/site.min.css': [
	          'css/bootstrap.min.css',
	          'bootflat/css/bootflat.css',
	          'css/site.css'
	        ],
          'bootflat/css/bootflat.min.css': 'bootflat/css/bootflat.css'
        }
      }
    },
    sass: {
      dist: {
        files: {
          'bootflat/css/bootflat.css': 'bootflat/scss/bootflat.scss'
        },
        options: {                      
          style: 'expanded',
          sourcemap: 'true'
        }
      }
    },
    pkg: grunt.file.readJSON('package.json')
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', [
    'sass',
    'cssmin',
    'uglify'
  ]);
};