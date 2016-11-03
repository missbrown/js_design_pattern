/**
 * Created by xiaolei.yang on 2016/11/3.
 */
var visualLife = (function() {
    function visualLife() {}
    visualLife.prototype.go = function() {
        this.born();
        var r1 = 100 * Math.random();
        if(r1 > 50) {
            this.playGames();
        }
        this.growUp();
        this.gotoCollege();
        var r3 = 100 * Math.random();
        if(r3 > 80) {
            console.log('You decided to live alone.');
        } else {
            this.marry();
        }
        if(this.health < 60) {
            this.die();
            return;
        } else {
            this.getOld();
        }
        var r2 = 100 * Math.random();
        if(r2 > 98) {
            console.log('Oops, you are immortal now!');
        } else {
            while(this.health > 40) {
                this.getOld();
            }
            this.die();
        }
    };
    visualLife.prototype.born = function() {
        this.health = 60;
        console.log('You are born, congratulations(Shit)!');
    };
    visualLife.prototype.playGames = function() {
        this.health += 10;
        throw 'Em...you are not allowed to play games.';
    };
    visualLife.prototype.growUp = function() {
        this.health += 10;
        console.log('You grow up, nothing special.');
    };
    visualLife.prototype.gotoCollege = function() {
        this.health -= 10;
        throw 'Want to go to College but have no money? Get out!';
    };
    visualLife.prototype.marry = function() {
        this.health -= 10;
        console.log('Shit! You just get one more trouble, the biggest ever(Marriage), plus.');
    };
    visualLife.prototype.getOld = function() {
        this.health -= 17;
        console.log('You are getting older now, old man.');
    };
    visualLife.prototype.die = function() {
        this.health = 0;
        console.log('Finally you\'ve made it.');
    };
    return visualLife;
})();

var myLife = (function() {
    function myLife() {}
    myLife.prototype = Object.create(visualLife.prototype);
    myLife.prototype.gotoCollege = function() {
        console.log('You go to college and get bored.');
    };
    myLife.prototype.playGames = function() {
        console.log('Games are good to your health.');
    };
    return myLife;
})();

var life = new myLife();
life.go();