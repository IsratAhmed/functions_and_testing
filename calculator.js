const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = function(a, b){
    return a * b;
};

const divide = function(a, b){
    return a / b;
};

const modulus = function(a, b){
    return a % b;
};

const even = function(e){
    if(e % 2 == 0){
        return true;
    } else {
        return false;
    }
};

const odd = function(o){
    if(o % 2 != 0){
        return false;
    } else {
        return true;
    }
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
