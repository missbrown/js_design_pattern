/**
 * Created by xiaolei.yang on 2016/11/3.
 */
var cell = (function() {
    function cell(state){
        this.chromosomeNumber = 24;
        this.currentState = state;
    }
    cell.prototype.cycle = function() {
        this.currentState.next(this);
    };
    cell.prototype.getState = function() {
        return this.currentState;
    };
    cell.prototype.toString = function() {
        return "chromosomeNumber->" + this.chromosomeNumber + "," + "currentState->[" + this.currentState + "]";
    };
    return cell;
})();

var State = (function() {
    function State(name, processor) {
        this.name = name;
        this.processor = processor;
    }
    State.prototype.toString = function() {
        return "name->" + this.name;
    };
    State.prototype.setNext = function(nextState) {
        this.nextState = nextState;
    };
    State.prototype.next = function(cell) { // cell obj as this
        this.processor(cell);
        cell.currentState = this.nextState;
    };
    return State;
})();

var cycles = [];
var cellVector = [];
var count = 0;
cycles.push(new State('interval', function(cell) {/*do nothing*/}));
cycles.push(new State('initiate', function() {/*console.log('Initiating reproduction...');*/}));
cycles.push(new State('copy', function(cell) {/*console.log(cell); console.log('copying chromosomes...');*/ cell.chromosomeNumber *= 2;}));
cycles.push(new State('duplicate', function(c) {
    //console.log(c);
    //console.log('duplicating the cell');
    var child = new cell(cycles[0]);
    child.chromosomeNumber = c.chromosomeNumber / 2;
    count++;
    cellVector.push(child);
    c.chromosomeNumber /= 2;
    //console.log(c);
    //console.log('duplicate complete');
}));
for(var i = 0; i < cycles.length; i++) {
    if(i === cycles.length - 1) {
        cycles[i].setNext(cycles[0]);
    } else {
        cycles[i].setNext(cycles[i+1]);
    }
}
console.log('cycles are: ' + cycles);
var c = new cell(cycles[0]);
cellVector.push(c);

setInterval(function() {
    var len = cellVector.length;
    for(var j = 0; j < len; j++) {
        c.cycle();
    }
    console.log(cellVector.length);
}, 1000);
