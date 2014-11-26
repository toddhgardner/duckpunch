
# Prototype Side-Effects Demo

Deception, Responsibility, and Duck Punching JavaScript
Todd H Gardner

1. Review the code to send an array of emails
2. Show the behavior sending strings
3. Show the Array.prototype.toJSON wrongness
4. Add hack to remove and restore it for our use.


var oldToJSON = Array.prototype.toJSON;
delete Array.prototype.toJSON;
request.send(JSON.stringify({
  emails: ["todd@trackjs.com","eric@trackjs.com"]
}));
Array.prototype.toJSON = oldToJSON;