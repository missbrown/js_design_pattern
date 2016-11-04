/**
 * Created by xiaolei.yang on 2016/11/4.
 */
function naiveFibonacci(n) {
    if(isNaN(n) || n < 0)
        throw 'Illegal Argument';
    if(n < 2) return 1;
    else {
        return naiveFibonacci(n-1) + naiveFibonacci(n-2);
    }
}

var memoizationFibonacci = (function(){
    var fibo = [];
    fibo[0] = 1;
    fibo[1] = 1;
    return function(n) {
        if(isNaN(n) || n < 0)
            throw 'Illegal Argument';
        if(n < 2) return 1;
        else {
            if(!fibo[n]) {
                fibo[n] = memoizationFibonacci(n-1) + memoizationFibonacci(n-2);
            }
            return fibo[n];
        }
    }
})();

//console.log(naiveFibonacci(40));
console.log(memoizationFibonacci(40));
