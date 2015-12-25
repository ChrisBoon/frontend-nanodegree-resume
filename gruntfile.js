module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
              myFiles: ['js/site/*.js']
        },
        //concatenate js
        concat: {
            dist: {
                src: [
                    'js/libs/*.js', // Library JS
                    'js/site/*.js'  // My JS
                ],
                dest: 'build/js/production.js',
            }
        },
        //minify js
        uglify: {
            build: {
                src: 'build/js/production.js',
                dest: 'build/js/production.min.js'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'build/css/global.css': 'css/sass/global.scss'
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({browsers: ['last 3 versions']})
                ]
            },
            dist: {
                src: 'build/css/global.css'
            }
        },
        csscomb: {
            foo: {
                 files: {
                     'build/css/global.css': ['build/css/global.css']
                 }
            }
        },
        copy: {
            img: {
                expand: true,
                src: 'img/source/dont-resize/*',
                dest: 'build/img/',
                flatten: true,
                filter: 'isFile'
            },
            build: {
                src: '*.html',
                dest: 'build/',
            },
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'build/',
                    dest: 'dist/',
                    src: [
                        'css/*.css',
                        '*.html',
                        'img/*',
                        'js/*.min.js'
                    ]
                }]
            }


        },
        connect: {
            build: {
                options: {
                    port: 9001,
                    keepalive: true,
                    base: 'build'
                }
            },
            dist: {
                options: {
                    port: 9001,
                    keepalive: true,
                    base: 'dist'
                }
            }

        },
        watch: {
            scripts: {
                files: ['js/site/*.js'],
                tasks: ['jshint','concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['css/sass/*.scss'],
                tasks: ['sass','postcss','csscomb'],
                options: {
                    spawn: false,
                    livereload: true,
                }
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-csscomb');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', [
        'jshint',
        'concat',
        'uglify',
        'sass',
        'postcss',
        'csscomb',
        'copy:build'
    ]);

    grunt.registerTask('dist', [
        'copy:dist'
    ]);


};