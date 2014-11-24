module.exports = function(grunt) {

  grunt.registerTask("default", [
    "connect:cdn",
    "connect:server"]);

  grunt.loadNpmTasks("grunt-contrib-connect");

  grunt.initConfig({
    connect: {

      // The primary webserver
      server: {
        options: {
          port: 3000,
          base: "src",
          keepalive: true,
          middleware: function (connect, options, middleware) {
            middleware.unshift(["/api/emails", function (req, res, next) {
              var body = "";
              req.on("data", function (data) {
                body += data.toString();
              });
              req.on("end", function () {
                console.log(body);
                res.end("{ id: '1' }");
              });
            }]);
            return middleware;
          }
        }
      },

      // Represents a third-party CDN that we might load scripts from
      cdn: {
        options: {
          port: 3001,
          base: "src"
        }
      }
    }
  });

};