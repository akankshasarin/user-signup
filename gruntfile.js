module.exports = function(grunt) {
  grunt.initConfig({
    svgstore: {
      options: {
        prefix: "icon-", // This will prefix each ID
        svg: {
          // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG
          viewBox: "0 0 100 100",
          xmlns: "http://www.w3.org/2000/svg"
        }
      },
      your_target: {
        files: {
          // SRP Web icons
          "./src/resources/dist/icons/icons.svg": [
            "./src/resources/icons/*.svg"
          ]
        }
      }
    }
  });
  // Actually load this plugin's task(s).
  // grunt.loadTasks('tasks');
  grunt.loadNpmTasks("grunt-svgstore");
  grunt.registerTask("default", "svgstore");
};
