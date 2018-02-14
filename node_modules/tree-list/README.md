# tree-list
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]


> Print a list of files into an ASCII tree

## Why?
[https://en.wikipedia.org/wiki/Tree_(Unix)](tree) is an awesome UNIX command, but there are two issues with it that this module attempts to address. The first is that tree relies on the file system, so there's no way to print out an arbitrary list of files into an ASCII tree.
The second is that if any of the directories only contain a single directory, they all still take up an entire line.
However, to me, this is an inefficient use of space, so this module will collapse directories with only a single entry down to the smallest line it can.

This module is in no way meant to replace the tree command, or even share a similar API, but when you have a list of file paths, it can be handy to print them out in graphical format.

## Install

```
$ npm install --save tree-list
```


## Usage

```js
var treeList = require('tree-list');

treeList(['first/second/third/file.js', 'first/fourth/another.js']);
//=> first
	├─ second/third/file.js
	└─ fourth/another.js

treeList(`first/second/third/file.js
first/fourth/another.js`);
//=> first
	├─ second/third/file.js
	└─ fourth/another.js

treeList(
	['first/second/third/file.js', 'first/fourth/another.js'],
	{
		expand: true
	}
);
//=> first
	├─ second
	│  └─ third
	│     └─ file.js
	└─ fourth
		└─ another.js
```

## CLI

```
$ npm install --global tree-list
```
```
$ tree-list --help

 $ tree-list [string]
 $ [string] | tree-list

 Options
 -e, --expand Whether to expand directories to their own line, even if it only has another directory as it's child

 Examples:

 $ tree-list "foo/bar/baz
 foo/bar/foo
 foo/baz bar/baz/boo.js"

 ├─ foo
 │  ├─ bar
 │  │  ├─ baz
 │  │  └─ foo
 │  └─ baz
 └─ bar/baz/boo.js

 $ git diff --name-only HEAD^.. | tree-list
 ├─ lib
 │  ├─ cli
 │  │  ├─ index.js
 │  │  └─ args.js
 │  └─ index.js
 └─ test/cli/index.js
```


## API

### treeList(input, [options])

#### input

*Required*
Type: `array` or `string`

An array or newline delimited string of paths to print out a tree for

#### options

##### expand

Type: `boolean`
Default: `false`

By default, directory paths will be collapsed so that directories that only contain directories won't be printed on their own line.
Passing this flag will print each directory on it's own line, regardless of it's children.


## License

MIT © [Nate Cavanaugh](http://alterform.com)

[npm-image]: https://img.shields.io/npm/v/tree-list.svg?style=flat-square
[npm-url]: https://npmjs.org/package/tree-list
[travis-image]: https://img.shields.io/travis/natecavanaugh/tree-list/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/natecavanaugh/tree-list