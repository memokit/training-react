const loginFunc = require('./login');

module.exports = {
    url: '127.0.0.1',
    login: loginFunc,
    logout: () => {
        console.log('logged out');
    }
}