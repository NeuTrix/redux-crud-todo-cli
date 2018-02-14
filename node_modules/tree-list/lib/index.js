'use strict';
var _ = require('lodash');
var CAT = require('classic-ancii-tree');
var path = require('path');
var tree_walk = require('tree-walk');
var fs = require('fs');

var chalk = require('cli-color-keywords')();

module.exports = function(input, options) {
	options = options || {};

	const SEP = path.sep;

	if (_.isString(input)) {
		input = input.split('\n');
	}

	if (!_.isArray(input)) {
		throw new Error('You must pass in either an array, or a newline delimeted string');
	}
	else {
		input = _.flatten(_.invokeMap(input, 'split', '\n'));
	}

	var obj = {
		label: '',
		nodes: []
	};

	_.forEach(
		input,
		function(item, index) {
			var cache = obj.nodes;

			item = _.compact(item.split(SEP));

			var last = item.length - 1;

			_.forEach(
				item,
				function(item, index) {
					var fileObj = _.find(cache, ['label', item]);

					if (!fileObj) {
						fileObj = {
							label: item,
							nodes: []
						};

						cache.push(fileObj);
					}

					cache = fileObj.nodes;
				}
			);
		}
	);

	var nodeWalker = tree_walk(
		function(item) {
			return item.nodes;
		}
	);

	nodeWalker.postorder(
		obj,
		function(item, index, parent) {
			if (chalk.enabled && item.nodes.length) {
				item.color = 'cyan';
			}

			if (parent && parent.nodes.length === 1) {
				var label = item.label;

				if (!options.expand || !parent.label) {
					if (parent.label) {
						parent.label += SEP;
					}

					parent.label += label;
					parent.nodes = item.nodes;
					parent.color = item.color;
				}
			}
		}
	);

	nodeWalker.preorder(
		obj,
		function(item, index, parent) {
			var label = item.label;

			if (!item.nodes.length && label.includes(SEP)) {
				var dir = path.dirname(label);
				var basename = path.basename(label);

				dir += SEP;

				item.label = `${chalk.cyan(dir)}${basename}`;
			}
		}
	);

	return CAT(obj);
};

module.exports.chalk = chalk;