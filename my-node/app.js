const authorize = require('./module/login')
const authorizeObj = require('./module/authorizs')

console.log(authorize);

authorize("luffy", "indy");

console.log(authorizeObj);

authorizeObj.login('kitti', 'P@ssw0rd');
authorizeObj.logout();