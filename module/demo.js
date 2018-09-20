exports = {};
const getParam = () => window.location.href;
let a = 123;

exports.a = a;
module.exports.getParam = getParam;
