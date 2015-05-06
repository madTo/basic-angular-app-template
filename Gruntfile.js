module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
	    concat: {
	        css: {
	           src: [
	                 'node_modules/bootstrap/dist/css/bootstrap.min.css',
	                 'www/assets/css/styles.css',
	                 'node_modules/angular-loading-bar/build/loading-bar.min.css',
	                ],
	            dest: 'www/assets/build/main.css'
	        },
	        js : {
	        	src: [
    				'node_modules/jquery/dist/jquery.min.js',
    				'node_modules/angular/angular.min.js',
    				'node_modules/angular-ui-router/build/angular-ui-router.min.js',
    				'node_modules/angular-loading-bar/build/loading-bar.min.js',
    				'www/assets/js/app.js',
    				'www/assets/js/services.js',
    				'www/assets/js/controllers.js'
	        	],
	        	dest: 'www/assets/build/scripts.js'
	        },
	    },
	    cssmin : {
			css:{
			    src: 'www/assets/build/main.css',
			    dest: 'www/assets/build/main.min.css'
			}
	    },	
	    uglify: {
	    	build: {
	    		files: {
	    			'www/assets/build/scripts.min.js' : [
	    				'node_modules/jquery/dist/jquery.min.js',
	    				'node_modules/angular/angular.min.js',
	    				'node_modules/angular-ui-router/build/angular-ui-router.min.js',
	    				'node_modules/angular-loading-bar/build/loading-bar.min.js',
	    				'www/assets/js/app.js',
	    				'www/assets/js/services.js',
	    				'www/assets/js/controllers.js'
	    			]
	    		}
	    	}
	    },
	    watch: {
	    	options: {
				port: 3000,	    		
				// livereload: true
	    	},
	    	scripts: {
	    		files: [
	    			'www/assets/js/*.js', 
	    			'www/assets/css/*.css', 
	    			'!www/assets/css/main.css',
	    			'!www/assets/css/main.min.css',
	    			'!www/assets/js/scripts.js',
	    			'!www/assets/js/scripts.min.js'
	    		],
	    		tasks: ['concat:js', 'concat:css', 'cssmin:css', 'uglify:build']
	    	}
	    }          
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
};