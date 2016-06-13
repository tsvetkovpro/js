var warn = function (msg) {
    console.log('Внимание!: ', msg);
};

var info = function (msg) {
    console.log('Информация: ', msg);
};

var error = function (msg) {
    console.log('Ошибка', msg);
};

exports.warn = warn;
exports.info = info;
exports.error = error;