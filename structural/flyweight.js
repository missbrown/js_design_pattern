/**
 * Created by asus on 2016/11/2.
 */
var Soldier = (function() {
    function Soldier() {}
    // These three properties are almost same in many soilders, so they share the memory allocated.
    Soldier.prototype.Health = 10;
    Soldier.prototype.FightingAbility = 5;
    Soldier.prototype.Hunger = 0;
    return Soldier;
})();

var s1 = new Soldier();
var s2 = new Soldier();

s1.Health = 8;
console.log(s1.Health);
console.log(s1.FightingAbility);
console.log(s2.Health);
console.log(s2.Hunger);