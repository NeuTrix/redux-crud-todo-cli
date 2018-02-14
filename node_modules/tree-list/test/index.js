'use strict';
var treeList = require('../lib/');
var chalk = treeList.chalk;

var chai = require('chai');

chai.use(require('chai-string'));

var assert = chai.assert;

var paths = [
	'first/second/third/file.js',
	'first/fourth/another.js'
];

var tree = [
	'first',
	'├─ second/third/file.js',
	'└─ fourth/another.js'
].join('\n');

var expandedTree = [
	'first',
	'├─ second',
	'│  └─ third',
	'│     └─ file.js',
	'└─ fourth',
	'   └─ another.js'
].join('\n');

it(
	'should render a list of files as a tree',
	function() {
		assert.equal(treeList(paths), tree);
	}
);

it(
	'should render a colored list of files as a tree',
	function() {
		chalk.enabled = true;

		var tree = [
			chalk.cyan('first'),
			`├─ ${chalk.cyan('second/third/')}file.js`,
			`└─ ${chalk.cyan('fourth/')}another.js`
		].join('\n');

		assert.equal(treeList(paths), tree);
	}
);

it(
	'should render list of files as an expanded tree',
	function() {
		chalk.enabled = false;

		var renderedTree = treeList(
			paths,
			{
				expand: true
			}
		);

		assert.equal(renderedTree, expandedTree);
	}
);

it(
	'should allow an empty string',
	function() {
		chalk.enabled = false;

		assert.equal(treeList(''), '');
	}
);

it(
	'should throw an error for wrong input',
	function() {
		chalk.enabled = false;

		try {
			treeList({});
		}
		catch (e) {
			// console.log();
			assert.isTrue(e instanceof Error);
			assert.equal(e.message, 'You must pass in either an array, or a newline delimeted string');
		}
	}
);