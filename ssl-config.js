let path = require('path');
let fs = require("fs");

exports.privateKey = fs.readFileSync(path.join(__dirname, '/server/private/privatekey.pem')).toString();
exports.certificate = fs.readFileSync(path.join(__dirname, '/server/private/certificate.pem')).toString();