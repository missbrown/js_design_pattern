/**
 * Created by xiaolei.yang on 2016/11/4.
 */
var SpyUpon = (function() {
    function SpyUpon() {}
    SpyUpon.prototype.write = function(toWrite) {
        console.log(toWrite);
        return 7;
    };
    return SpyUpon;
})();

var spyUpon = new SpyUpon();
spyUpon._write = spyUpon.write;
spyUpon.write = function(arg1) {
    console.log("intercepted");
    this.called = true;
    this.args = arguments;
    this.result = this._write(arg1);
    return this.result;
};

// it is convenient to use spy even the 'write' function is a third party function
console.log(spyUpon.write("hello world"));
console.log(spyUpon.called);
console.log(spyUpon.args);
console.log(spyUpon.result);