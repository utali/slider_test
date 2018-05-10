/**
 * Created by liqiaoqiao on 2018/4/19.
 */
var cache = require('memory-cache');

var product = function () {
  var time = new Date().getTime(); //时间戳
  var number = ("0000000" + 100000000 * Math.random()).match(/(\d{8})(\.|$)/)[1]; //8位随机数
    var imgSrc;
    var n = Math.floor(Math.random()*5)%5;
    imgSrc = `bc0${n+1}.jpg`;
    var qX = 400, qY = 250, s=50;
    var rX = Math.random()*(qX-3.5*s) + 2*s;
    var rY = Math.random()*(qY-15-25-s) + 15;
    var data = {
        time: time,
        number: number,
        imgSrc: imgSrc,
        x: rX,
        y: rY
    };
    cache.put('test_time', time);
    cache.put('test_number',number);
    return data;
};

module.exports = product;