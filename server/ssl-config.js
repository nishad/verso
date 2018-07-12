var path = require('path'),
fs = require("fs");
exports.privateKey = fs.readFileSync('/location/privatekey.pem').toString();
exports.certificate = fs.readFileSync('/location/certificate.pem').toString();

