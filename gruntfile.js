module.exports = function (grunt) {

    grunt.initConfig({

        // Compilar o LESS em CSS
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "main.css": "main.less"
                }
            }
        },

        // Comprimir o código JavaScript
        uglify: {
            options: {
                compress: true,
                mangle: true,
                sourceMap: 'js/scripts.min.js.map'
            },
            scripts: {
                files: {
                    'js/scripts.min.js': ['js1.js', 'js2.js']
                }
            },
            scripts2: {
                files: {
                    'js/script2.min.js': ['js2.js']
                }
            }
        }        

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Tarefas padrão
    grunt.registerTask('default', ['less', 'uglify']);

};
