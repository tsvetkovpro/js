var one = function () {
    return three();
};

var two = function () {
    return three();
};

var three = function () {
    console.log("... Привет мир! ");
};

exports.one = one;
exports.two = two;