/**
 * Created by asus on 2016/11/2.
 */
var Complaint = (function() {
    function Complaint(ComplainingParty, ComplainingAbout, Complaint) {
        this.ComplainingParty = ComplainingParty;
        this.ComplainingAbout = ComplainingAbout;
        this.Complaint = Complaint;
    }
    return Complaint;
})();


// complaint listener 1: clerk of the court
var ClerkOfTheCourt = (function() {
    function ClerkOfTheCourt() {}
    ClerkOfTheCourt.prototype.isAbleToResolve = function(complaint) {
        if(complaint.ComplainingParty === 'clerk') {
            return false;
        }
        if(complaint.ComplainingAbout === 'finance') {
            return false;
        }
        return true;
    };
    ClerkOfTheCourt.prototype.listenAndResolve = function(complaint) {
        console.log('complaint is => ' + complaint.Complaint);
        console.log('complaint : ' + complaint.ComplainingAbout + ' is resolved by clerk of the court');
    };
    return ClerkOfTheCourt;
})();

// complaint listener 2: king
var King = (function() {
    function King() {}
    King.prototype.isAbleToResolve = function() {
        return true;
    };
    King.prototype.listenAndResolve = function(complaint) {
        console.log('complaint is => ' + complaint.Complaint);
        console.log('complaint: ' + complaint.ComplainingAbout + ' is resolved by the King');
    };
    return King;
})();

// still another listener, usually decorate the complaint a little
var MessengerOfTheKing = (function() {
    function MessengerOfTheKing(){}
    MessengerOfTheKing.prototype.isAbleToResolve = function(complaint) {
        complaint.Complaint = 'Dear my king: ' + complaint.Complaint;
        return false;
    };
    return MessengerOfTheKing;
})();

var JudicialSystem = (function() {
    function JudicialSystem() {
        this.complaintListeners = new Array();
        this.complaintListeners.push(new ClerkOfTheCourt());
        this.complaintListeners.push(new MessengerOfTheKing());
        this.complaintListeners.push(new King());
    }
    JudicialSystem.prototype.resolve = function(complaint) {
        for(var i = 0; i < this.complaintListeners.length; i++) {
            if(this.complaintListeners[i].isAbleToResolve(complaint)) {
                this.complaintListeners[i].listenAndResolve(complaint);
                return; // complaint has been solved, so we stop here.
            }
        }
    };
    return JudicialSystem;
})();

var judicialSystem = new JudicialSystem();
judicialSystem.resolve(new Complaint('fishman', 'fish', 'There is no more fish to hunt!'));
judicialSystem.resolve(new Complaint('clerk', 'ritual', 'We must have pictures of saints on the wall!'));
judicialSystem.resolve(new Complaint('merchant', 'finance', 'Please protect our ships!'));

