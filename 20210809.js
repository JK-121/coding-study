const cal = {
    plus: function(a,b) {
       console.log(a + b);
    },
    minus: function(a,b) {
        console.log(a - b);
            },
    divide: function(a,b) {
        console.log(a / b);
                    },
    times: function(a,b) {
        console.log(a * b);
                    }
};

cal.plus(1,3);
cal.minus(5,2);
cal.divide(4,2);
cal.times(3,3);

const age = 30;
function calKrAge(wrAge) {
       return wrAge + 2;
};

const krAge = calKrAge(age);
console.log(krAge);

const cal2 = {
    plus: function(a,b) {
       return a + b;
    },
    minus: function(a,b) {
        return a - b;
            },
    divide: function(a,b) {
        return a / b;
                    },
    times: function(a,b) {
        return a * b;
                    }
};

const plusResult = cal2.plus(1,3);
const minusResult = cal2.minus(5,2);
const divideResult = cal2.divide(4,2);
const timesResult = cal2.times(3,3);

console.log(plusResult);
console.log(minusResult);
console.log(divideResult);
console.log(timesResult);