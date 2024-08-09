var ordinalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, ordinalArray_1 = ordinalArray; _i < ordinalArray_1.length; _i++) {
    var i = ordinalArray_1[_i];
    if (i == 1) {
        console.log("".concat(i, "st"));
    }
    else if (i == 2) {
        console.log("".concat(i, "nd"));
    }
    else if (i == 3) {
        console.log("".concat(i, "rd"));
    }
    else {
        console.log("".concat(i, "th"));
    }
}
