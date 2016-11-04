/**
 * Created by xiaolei.yang on 2016/11/2.
 */

var greekGod = function() {
    this.name = "Zeus";
    this.sacrifice = 0;
};
var RomanGod = function() {
    this.name = "Jupiter";
    this.sacrifice = 0;
};

var greekGodAdapter = (function() {
    function greekGodAdapter() {
        this.greekGod = new greekGod();
    }
    greekGodAdapter.prototype.getName = function() {
        return this.greekGod.name;
    };
    greekGodAdapter.prototype.getSacrifice = function() {
        return this.greekGod.sacrifice;
    };
    greekGodAdapter.prototype.pray = function() {
        console.log("I adorn you, mighty " + this.greekGod.name);
        this.greekGod.sacrifice++;
    };

    greekGodAdapter.prototype.showMight = function() {
        if(this.greekGod.sacrifice > 3) {
            console.log('Rainy day!');
        } else {
            console.log('Dry day!');
        }
    };
    return greekGodAdapter;
})();
var romanGodAdapter = (function() {
    function RomanGodAdapter() {
        this.RomanGod = new RomanGod();
    }
    RomanGodAdapter.prototype.getName = function() {
        return this.RomanGod.name;
    };
    RomanGodAdapter.prototype.pray = function() {
        console.log("I adorn you, mighty " + this.RomanGod.name);
        this.RomanGod.sacrifice++;
    };

    RomanGodAdapter.prototype.showMight = function() {
        if(this.RomanGod.sacrifice > 5) {
            console.log('Rainy day!');
        } else {
            console.log('Dry day!');
        }
    };

    RomanGodAdapter.prototype.kill = function() {
        console.log('kill ' + 100 * Math.random() + ' enemies!');
    };
    return RomanGodAdapter;
})();

var godManager = (function() {
    function godManager(kinship) {
        if(kinship === 'Greek') {
            this.godAdapter = new greekGodAdapter();
        } else if(kinship === 'Roman') {
            this.godAdapter = new romanGodAdapter();
        }
    }
    godManager.prototype.pray = function() {
        this.godAdapter.pray();
    };
    godManager.prototype.showMight = function() {
        this.godAdapter.showMight();
    };
    godManager.prototype.showPower = function() {
        if(this.godAdapter.kill) {
            this.godAdapter.kill();
        } else {
            console.log(this.godAdapter.getName() + ' has not enough power!');
        }
    };
    return godManager;
})();

var godServer = (function() {
    function godServer(kinship) {
        if(kinship === 'Greek') {
            this.godAdapter = new greekGodAdapter();
        } else if(kinship === 'Roman') {
            this.godAdapter = new romanGodAdapter();
        }
    }
    godServer.prototype = Object.create(godManager.prototype);
    godServer.prototype.showSacrificeTime = function() {
        console.log(this.godAdapter.getSacrifice());
    };
    return godServer;
})();

var god = new godManager('Greek');
god.pray();
god.pray();
god.showMight();
god.pray();
god.pray();
god.showMight();
god.showPower();

god = new godManager('Roman');
god.pray();
god.pray();
god.pray();
god.pray();
god.showMight();
god.pray();
god.pray();
god.showMight();
god.showPower();

var godService = new godServer('Greek');
godService.pray();
godService.pray();
godService.pray();
godService.showSacrificeTime();