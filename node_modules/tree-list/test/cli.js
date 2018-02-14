'use strict';
var treeList = require('../lib/');

var mockStdin = require('mock-stdin');

var cli = require('../lib/cli');

var _ = require('lodash');
var path = require('path');

var sinon = require('sinon');
var chai = require('chai');

chai.use(require('chai-string'));

var assert = chai.assert;

var paths = [
	'first/second/third/file.js',
	'first/fourth/another.js'
].join('\n');

var tree = [
	'first',
	'├─ second/third/file.js',
	'└─ fourth/another.js'
].join('\n');

describe(
	'CLI',
	function() {
		var argv = _.clone(process.argv);

		it(
			'should accept regular input',
			function(done) {
				var instance = new cli.CLI(
					{
						cli: {
							input: paths.split('\n')
						}
					}
				);

				assert.isDefined(instance.start);

				instance.run().then(
					function(results) {
						assert.equal(results, tree);
					}
				)
				.done(done, done);
			}
		);

		it(
			'should accept input from stdin',
			function(done) {
				var stdin = process.stdin;

				var originalTTY = stdin.isTTY;

				stdin.isTTY = false;

				var instance = new cli.CLI();

				stdin.push(paths);

				stdin.emit('end');

				assert.isDefined(instance.start);

				instance.run().then(
					function(results) {
						assert.equal(results, tree);
					}
				)
				.done(done, done);

				stdin.isTTY = originalTTY;
			}
		);
	}
);