/**
 * Created by xiaolei.yang on 2016/11/3.
 */
var BringTroopCommand = (function() {
    function BringTroopCommand(location, numberOfTroops, when) {
        this._location = location;
        this._numberOfTroops = numberOfTroops;
        this._when = when;
        this.receiver = new General();
    }
    BringTroopCommand.prototype.execute = function() {
        this.receiver.bringTroop(this._location, this._numberOfTroops, this._when);
    };
    return BringTroopCommand;
})();

var General = (function() {
    function General(){}
    General.prototype.bringTroop = function(location, numberOfTroops, when) {
        console.log('I have bring ' + numberOfTroops + ' soilders to ' + location  + ' in ' + when.toLocaleString());
    };
    return General;
})();
var time = new Date().getTime();
time +=  30 * 24 * 60 * 60 * 1000;
var cmd = new BringTroopCommand('South', 5000, new Date(time));
console.log('The king ordered to bring troops');
setTimeout(function(){cmd.execute();}, 2000);