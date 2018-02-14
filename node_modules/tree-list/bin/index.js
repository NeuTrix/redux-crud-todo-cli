#!/usr/bin/env node

var cli = require('../lib/cli');

cli.run()
.catch(
	function(err) {
		console.log('There was an error handling the input:');
		console.log(err);
		return '';
	}
)
.then(console.log.bind(console));