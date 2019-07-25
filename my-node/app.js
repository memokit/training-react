const authorize = require('./module/login')
const authorizeObj = require('./module/authorizs')
const User = require('./module/user');

let user = new User('indy', 'luffy');
user.confirmPackage('A001');

console.log(authorize);

authorize("luffy", "indy");

console.log(authorizeObj);

authorizeObj.login('kitti', 'P@ssw0rd');
authorizeObj.logout();