/**
 * Created by asus on 2016/10/22.
 */
var CarToy = (function(){
    function CarToy() {}
    CarToy.prototype.play = function() {
        console.log('The car roll and run');
    };
    return CarToy;
})();

var TankToy = (function() {
    function TankToy() {}
    TankToy.prototype.play = function() {
        console.log('The tank bump and bombard');
    };
    return TankToy;
})();

var Factory = (function() {
    function Factory(){}
    Factory.build = function(type) {
        if(type === 'car') return new CarToy();
        else if(type === 'tank') return new TankToy();
    };
    return Factory;
})();

var toy1 = Factory.build('car');
var toy2 = Factory.build('tank');
toy1.play();
toy2.play();