/**
 * Created by asus on 2016/10/22.
 */
var Westeros;
(function(Westeros) {
    var Wall = (function() {
        function Wall() {
            if(Wall._instance)
                return Wall._instance;
            Wall._instance = this;
        }
        Wall.getInstance = function() {
            if(this._instance)
                return this._instance;
            return new Wall();
        };
        Wall._instance = null;
        return Wall;
    })();
    Westeros.Wall = Wall;
})(Westeros || (Westeros = {}));

console.log(Westeros.Wall.getInstance() === Westeros.Wall.getInstance());