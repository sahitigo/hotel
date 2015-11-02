module.exports = function(grunt){
  grunt.initConfig({
  sass: {
    dist: {
      files: {
        'styles.css': 'styles.scss',
        
      }
    }
  },
  watch : {
    css: {
    files: ['*.scss'],
    tasks: ['sass'],
    
  },
}

});
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);
}