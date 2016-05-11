var express = require('express');
var router = express.Router();
var os = require('os');

router.get('/', function(req, res) {

	console.log(req);
	// thanks to:
	// http://stackoverflow.com/questions/10750303/how-can-i-get-the-local-ip-address-in-node-js
	var interfaces = os.networkInterfaces();
	var addresses = [];
	for (var k in interfaces) {
	    for (var k2 in interfaces[k]) {
	        var address = interfaces[k][k2];
	        if (address.family === 'IPv4' && !address.internal) {
	            addresses.push(address.address);
	        }
	    }
	}

	res.header("Cache-Control", "no-cache, no-store, must-revalidate");
	
	res.render('index', { 
		title: 'Skel',
		remoteAddress: req.connection.remoteAddress,
		localAddress: addresses
	});
});

router.get('/test/', function(req, res) {
	console.log(req);
	res.header("Cache-Control", "no-cache, no-store, must-revalidate");
	res.render('test', {
		title: '/test'
	});
});

router.get('/oci', function(req, res) {
	res.render('oci', {
		title: '/oci'
	});
});

router.get('/ocid', function(req, res) {
	res.render('ocid', {
		title: '/ocid'
	});
});


module.exports = router;
