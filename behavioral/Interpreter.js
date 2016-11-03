/**
 * Created by xiaolei.yang on 2016/11/3.
 */
var Battle = (function() {
    function Battle(battleGround, aggressor, defender, victor) {
        this.battleGround = battleGround;
        this.agressor = aggressor;
        this.defender = defender;
        this.victor = victor;
    }
    return Battle;
})();

var Parser = (function() {
    function Parser(battleText) {
        this.battleText = battleText;
        this.currentIndex = 0;
        this.battleList = battleText.split('\n');
    }
    Parser.prototype.nextBattle = function() {
        if(!this.battleList[0]) return null;
        var segments = this.battleList[0].match(/\((.+?)\s?->\s?(.+?)\s?<-\s?(.+?)\s?->s?(.+)/);
        return new Battle(segments[2], segments[1], segments[3], segments[4]);
    };
    return Parser;
})();

var text = "(Robert Baratheon -> River Trident <- RhaegarTargargen) -> Robert Baratheon";
var p = new Parser(text);
console.log(p.nextBattle());