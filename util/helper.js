var Helper =  function(){};

Helper.prototype.padleft = function(){

};

Helper.prototype.getRandom = function (length) {
    return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
};

exports.Helper = new Helper();