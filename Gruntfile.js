module.exports = function(grunt) {

  grunt.registerTask("default", ["connect:server"]);

  grunt.loadNpmTasks("grunt-contrib-connect");

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 3000,
          base: "src",
          keepalive: true
        }
      }
    }
  });

};