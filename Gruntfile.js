module.exports = function(grunt) {

  grunt.registerTask("default", [
    "connect:infojack",
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
            middleware.unshift(["/api/emails", function emailApi(req, res, next) {
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
      },

      // The remote Info-Jacking webserver
      infojack: {
        options: {
          port: 3002,
          base: "src",
          middleware: function (connect, options, middleware) {
            middleware.unshift(["/api/stealing", function stealingApi(req, res, next) {
              var body = "";
              req.on("data", function (data) {
                body += data.toString();
              });
              req.on("end", function () {
                console.log("WE STOLE THIS:", body);
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
                res.setHeader("Access-Control-Allow-Headers", "Content-Type");
                res.end("{ id: '1' }");
              });
            }]);
            return middleware;
          }
        }
      },
    }
  });

};