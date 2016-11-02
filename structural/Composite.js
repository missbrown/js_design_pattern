/**
 * Created by xiaolei.yang on 2016/11/2.
 */
var node = (function() {
    function node(name) {
        this.name = name;
        this.children = [];
    }

    node.prototype.addChild = function(child) {
        this.children.push(child);
    };
    node.prototype.getChildren = function() {
        return this.children;
    };
    node.prototype.getChildrenNames = function() {
        var array = [];
        for(child of this.children) {
            array.push(child.name);
        }
        return array;
    };
    node.prototype.blast = function() {
        for(child of this.children) {
            child.blast();
        }
    };
    return node;
})();

var n1 = new node('node1');
var n2 = new node('node2');
var n3 = new node('node3');
var n4 = new node('node4');

n1.addChild(n2);
n1.addChild(n3);
n2.addChild(n4);

var childrenNames = n1.getChildrenNames();
console.log(childrenNames);
n1.blast();
