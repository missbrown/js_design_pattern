/**
 * Created by xiaolei.yang on 2016/11/3.
 */
var Spy = (function() {
    function Spy() {
        this._partiesToNotify = [];
    }
    Spy.prototype.Subscribe = function(subscriber) {
        this._partiesToNotify.push(subscriber);
    };
    Spy.prototype.Unsubscribe = function(subscriber) {
        this._partiesToNotify.remove(subscriber);
    };
    Spy.prototype.SetPainKillers = function(amount) {
        for(var i = 0; i < this._partiesToNotify.length; i++) {
           this._partiesToNotify[i](amount);
        }
    };
    return Spy;
})();

var Player = (function() {
    function Player(){}
    Player.prototype.OnKingPainKillerChange = function(newPainKillerAmount) {
        if(newPainKillerAmount > 10) {
            console.log('The King will die')
        }
    };
    return Player;
})();

var s = new Spy();
var p1 = new Player();
var p2 = new Player();
s.Subscribe(p1.OnKingPainKillerChange);
s.Subscribe(p2.OnKingPainKillerChange);
s.SetPainKillers(12);