"use strict";
exports.__esModule = true;
exports.rs$ = void 0;
var rxjs_1 = require("rxjs");
exports.rs$ = new rxjs_1.ReplaySubject();
exports.rs$.subscribe({
    next: function (data) { return console.log(data); },
    error: function (error) { return console.warn(error); },
    complete: function () { return console.log('ReplaySubject completed'); }
});
var fakeAPIValuesOne = [7, 11, 13];
for (var _i = 0, fakeAPIValuesOne_1 = fakeAPIValuesOne; _i < fakeAPIValuesOne_1.length; _i++) {
    var element = fakeAPIValuesOne_1[_i];
    await wait(2000);
    exports.rs$.next(element);
}
function wait(milliseconds) {
    return new Promise(function (resolve) { return setTimeout(resolve, milliseconds); });
}
