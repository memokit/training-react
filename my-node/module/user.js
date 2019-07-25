module.exports = class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.age = 20;
    }

    buy() {
        console.log('buy product');

    }

    send(reciver) {
        console.log('send package to' + reciver);

    }

    confirmPackage(packageId) {
        console.log(this.username + ' got package: ' + packageId);

    }


}