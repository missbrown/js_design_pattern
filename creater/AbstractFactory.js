/**
 * Created by asus on 2016/10/22.
 */
var CourtSession = (function() {
    function CourtSession(abstractFactory) {
        this.abstractFactory = abstractFactory;
    }
    CourtSession.prototype.complaintPresented = function(complaint) {
        /*
         the abstract factory here will actually be an object created by the factory
         and we trust that the factory.prototype had a makeDecision function
         */
        this.abstractFactory.makeDecision();
    };
    return CourtSession;
})();

var KingFactory = (function() {
    function KingFactory() {

    }
    KingFactory.prototype.makeDecision = function() {
        console.log('The king make a decision.');
    };
    return KingFactory;
})();

var UpperHouseFactory = (function() {
    function UpperHouseFactory() {

    }
    UpperHouseFactory.prototype.makeDecision = function() {
        console.log('The upper house make a decision.');
    };
    return UpperHouseFactory;
})();

var courtSession1 = new CourtSession(new KingFactory());
var courtSession2 = new CourtSession(new UpperHouseFactory());
courtSession1.complaintPresented();
courtSession2.complaintPresented();



