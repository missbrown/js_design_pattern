/**
 * Created by asus on 2016/11/1.
 */
var ship = (function() {
    function ship() {
        this.name = 'my ship';
        this.rudderAngle = 0;
        this.sailAngle = 0;
    }
    ship.prototype.setRudderAngleTo = function(number) {
        this.rudderAngle = number;
    };
    ship.prototype.setSailAngle = function(sailId, sailAngle) {
        this.sailId = sailId;
        this.sailAngle = sailAngle;
    };
    return ship;
})();

var shipAdapter = (function() {
    function shipAdapter() {
        this._ship = new ship();
    }
    shipAdapter.prototype.sail = function() {
        this._ship.setRudderAngleTo(30);
        this._ship.setSailAngle(10, 20);
    };
    return shipAdapter;
})();

var myShip = new shipAdapter();

myShip.sail();