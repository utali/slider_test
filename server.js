var http = require('http');
var fs = require('fs');
var express = require('express');
var path = require('path');
var querystring = require('querystring');
var cache = require('memory-cache');
var bodyParser = require('body-parser');
var product = require('./lib/product');

// var router = express.Router();

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
    res.redirect('/index.html');
});
app.get('/data', function (req, res) {
    console.log('=================================');
    console.info('请求接口 127.0.0.1:9011'+ req.url);
    res.send(product());
    res.end();
});
app.post('/test_data',function (req, res) {
    console.log('=================================');
    console.info('请求接口 127.0.0.1:9011'+ req.url);
    if (cache.get('test_time') === Number(req.body.test_time) && cache.get('test_number') === req.body.test_number) {
        res.send({result: true});
        res.end();
    } else {
        res.send({result: false});
        res.end();
    }
});
var server = http.createServer(app);
server.listen(9011, function () {
    console.log('this.s is listening on port : ' + 9011)
});