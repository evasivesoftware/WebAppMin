module.exports = function (grunt) {

    grunt.initConfig({
    	
	    uglify: {
	        files: {
	            src: ['assets/js/src/*.js'],
	            dest: 'assets/js/build/',
	            expand: true,
	            flatten: true,
	            ext: '.min.js'
	        }
	    },
	    concat: {
	      options: {
	        separator: ';'
	      },
	      dist: {
	        src: ['assets/js/vendor/jquery-1.11.0.min.js', 'assets/js/build/app.min.js'],
	        dest: 'assets/js/app.min.js'
	      },

	    },
	    autoprefixer: {
				options: {
					browsers: ['last 50 versions', 'ie 6', 'ie 7', 'ie 8', 'ie 9']
    		},
				dist: {
					files: {
						'assets/css/global.min.css': 'assets/css/global-noprefix.min.css'
					}
				}
	    },
	    watch: {
	        js:  { files: 'assets/js/src/*.js', tasks: [ 'uglify', 'concat' ] },
	        css: { files: 'assets/css/global-noprefix.min.css', tasks: ['autoprefixer'] }
	    }
	});

	// load plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-autoprefixer');

	// register at least this one task
	grunt.registerTask('default', [ 'uglify', 'concat', 'autoprefixer' ]);

};
