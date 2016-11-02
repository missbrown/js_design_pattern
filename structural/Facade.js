/**
 * Created by xiaolei.yang on 2016/11/2.
 */
var hyperspaceModule = (function() {
    function hyperspaceModule() {
        this.status = 'normal';
    }

    hyperspaceModule.prototype.jump = function() {
        console.log('initiating hyperspace jump...');
        if(this.status === 'normal') {
            setTimeout(function() {console.log('hyperspace jump complete.');}, 2000);
        } else {
            console.log('hyperspace jump failed due to ' + status + ' status.');
        }
    };
    hyperspaceModule.prototype.turnoff = function() {
        if(this.status === 'normal') {
            setTimeout(function() {console.log('hyperspace module turnoff complete.');}, 2000);
        } else {
            console.log('hyperspace module turnoff failed due to ' + status + ' status.');
        }
    };
    return hyperspaceModule;
})();

var dockingModule = (function() {
    function dockingModule() {
        this.status = 'normal';
    }
    dockingModule.prototype.launch = function() {
        console.log('initiating launch...');
        if(this.status === 'normal') {
            setTimeout(function() {console.log('All units launched.');}, 1000);
        } else {
            console.log('launch jump failed due to ' + status + ' status.');
        }
    };
    dockingModule.prototype.receive = function() {
        console.log('initiating launch...');
        if(this.status === 'normal') {
            setTimeout(function() {console.log('All units received.');}, 1000);
        } else {
            console.log('receive failed due to ' + status + ' status.');
        }
    };
    return dockingModule;
})();


var mothership = (function() {
    function mothership() {
        this.hyperspaceModule = new hyperspaceModule();
        this.dockingModule = new dockingModule();
    }
    mothership.prototype.execute = function(cmd) {
        switch (cmd) {
            case 'defend': this.defend(); break;
            case 'hyperspacejump': this.jump(); break;
            default : break;
        }
    };
    mothership.prototype.defend = function() {
        this.dockingModule.launch();
        this.hyperspaceModule.turnoff();
    };
    mothership.prototype.hyperspacejump = function() {
        this.dockingModule.receive();
        this.hyperspaceModule.jump();
    };
    return mothership;
})();