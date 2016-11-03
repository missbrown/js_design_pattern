/**
 * Created by xiaolei.yang on 2016/11/3.
 */
var FIFO = (function() {
    function FIFO() {}
    FIFO.prototype.handle = function() {
        console.log('first in first out');
    };
    return FIFO;
})();
var LUFO = (function() {
    function LUFO() {}
    LUFO.prototype.handle = function() {
        console.log('least use first out');
    };
    return LUFO;
})();

var PageManager = (function() {
    function PageManager() {
    }
    PageManager.prototype.setData = function(data) {
        this.data = data;
        if(this.data.length > 10) {
            this.strategy = new LUFO();
        } else {
            this.strategy = new FIFO();
        }
    };
    PageManager.prototype.handle = function() {
        this.strategy.handle();
    };
    return PageManager;
})();
var manager = new PageManager();
manager.setData([1,34,45,5]);
manager.handle();
manager.setData([1,3,4,3,54,5,6,56,67,2,3,4,34]);
manager.handle();