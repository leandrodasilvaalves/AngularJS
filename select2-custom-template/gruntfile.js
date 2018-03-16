module.exports = function (grunt) {
    
    grunt.initConfig({

        jshint: {
            dist: {                
                src: ['app/*.js','app/directives/**/*.js']
            }
        },
        concat:{
            scripts: {                
                src: ['app/*.js','app/directives/**/*.js'],
                dest: 'dist/select2-custom-all.js'
            }
        },
        uglify:{
            scripts:{
                src:['dist/select2-custom-all.js'],
                dest:'dist/select2-custom.min.js'
            }
        },        
        cssmin:{
            all: {
                src: ['app/directives/**/*.css'],
                dest: 'dist/select2-custom.min.css'
            }
        },
        htmlmin:{
            options:{
                removeComments: true,
                collapseWhitespace: true
            },            
            files: {
                src: ['app/directives/select2-custom/select2-custom.html'],
                dest: 'dist/select2-custom.html'
            }
        }        
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('dist-etp1',['jshint', 'concat:scripts', 'htmlmin','cssmin']);
    //copiar e colar o template e o css manualmente em "select2-custom-all.js" 
    //e depis executar as task 'dist-etp2'
    grunt.registerTask('dist-etp2',['uglify:scripts']);

}