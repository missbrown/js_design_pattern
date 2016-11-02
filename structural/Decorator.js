/**
 * Created by xiaolei.yang on 2016/11/2.
 */
var messagePipe = (function() {
    function messagePipe(msg) {
        this.msg = msg;
    }
    messagePipe.prototype.transfer = function() {
        console.log('... ... ' + this.msg);
    };
    messagePipe.prototype.getMessage = function() {
        return this.msg;
    };
    return messagePipe;
})();

var lightMessagePipe = (function(msg) {
    function lightMessagePipe(pipe) {
        this.pipe = pipe;
    }
    lightMessagePipe.prototype.transfer = function() {
        console.log('------------');
        this.pipe.transfer();
        console.log('------------');
    };
    lightMessagePipe.prototype.getMessage = function() {
        return this.pipe.getMessage();
    };
    return lightMessagePipe;
})();

var quantumPipe = (function() {
    function quantumPipe(pipe) {
        this.pipe = pipe;
    }
    quantumPipe.prototype.transfer = function() {
        var msg = this.pipe.getMessage();
        msg = msg.toUpperCase();
        console.log('******');
        this.pipe.transfer();
        console.log('******');
    };
    return quantumPipe;
})();

var pipe = new quantumPipe(new lightMessagePipe(new messagePipe('I am an idiot')));
pipe.transfer();