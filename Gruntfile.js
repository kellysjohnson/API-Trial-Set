module.exports = function(grunt){
    //Project configuration for Heroku_Micro_Set.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        includeSource: {

        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/script.js',
                dest: 'server/public/scripts/app.min.js'
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: "node_modules/",
                        src: [
                            "angular/angular.min.js",
                            "angular/angular.min.js.map",
                            "angular/angular-csp.css"
                        ],
                        "dest": "server/public/vendor/"
                    },
                    {
                        expand: true,
                        cwd: "node_modules/",
                        src: [
                            "jquery-ui/jquery-ui.js"
                        ],
                        "dest": "server/public/vendor/"
                    },
                    {
                        expand: true,
                        cwd: "node_modules/",
                        src: [
                            "jquery-/angular.min.js",
                            "angular/angular.min.js.map",
                            "angular/angular-csp.css"
                        ],
                        "dest": "server/public/vendor/"
                    },
                    {
                        expand: true,
                        cwd: "node_modules/",
                        src: [
                            "angular-route/angular-route.min.js",
                            "angular-route/angular-route.min.js.map",
                        ],
                        "dest": "server/public/vendor/"
                    },
                    {
                        expand: true,
                        cwd: "node_modules/bootstrap/dist/css/",
                        src: [
                            "bootstrap.css",
                            "bootstrap.css.map",
                            "bootstrap.min.css",
                            "bootstrap-theme.css",
                            "bootstrap-theme.css.map",
                            "bootstrap-theme.min.css"
                        ],
                        "dest": "server/public/vendor/bootstrap/css_js"
                    },
                    {
                        expand: true,
                        cwd: "node_modules/jquery/dist",
                        src: [
                            "jquery.min.js",
                            "jquery.min.map"
                        ],
                        "dest": "server/public/scripts/"
                    },
                    {
                        expand: true,
                        cwd: "node_modules/bootstrap/dist/js",
                        src: [
                            "bootstrap.min.js"
                        ],
                        "dest": "server/public/vendor/bootstrap/css_js"
                    },
                    {
                        expand: true,
                        cwd: "client/stylesheets",
                        src: [
                            "stylesheets.css"
                        ],
                        "dest": "server/public/stylesheets/"
                    },
                    {
                        expand: true,
                        cwd: "client/scripts",
                        src: [
                            "script.js"
                        ],
                        "dest": "server/public/scripts/"
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-include-source');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);

};