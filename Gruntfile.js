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
	    watch: {
	        js:  { files: 'assets/js/src/*.js', tasks: [ 'uglify', 'concat' ] },
	    }
	});

	// load plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// register at least this one task
	grunt.registerTask('default', [ 'uglify', 'concat' ]);

};
