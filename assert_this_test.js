// assert_this_test.js - test if assert_this.js will work in a browser.
// depends on assert_this_test.html.
//
// @author: R. S. Doiel, <rsdoiel@gmail.com>
// copyright (c) 2011 all rights reserved
//
// Released under New the BSD License.
// See: http://opensource.org/licenses/bsd-license.php
//
// revision: 0.0.0

(function () {
	"use strict";
	
	/*jslint undef: true */
	if (console === undefined ||
			console.log === undefined) {
		throw "console.log() not support!";
	}
	
	if (assert === undefined) {
		console.log("Didn't find assert object.");
		throw "No assert object found.";
	}
	/*jslint undef: false */
	
	console.log("Starting test for assert_this.js...");
	
	if (assert.fail("testing assert.fail(msg)") === false) {
		console.log("assert.fail(msg) OK.");
	} else {
		console.error("assert.fail(msg) Failed!");
		throw "assert.fail(msg) Failed!";
	}

	if (assert.ok(true, "testing assert.ok(true)") === true) {
		console.log("assert.ok(true) OK");
	} else {
		console.error("assert.ok(true) failed.");
		throw "assert.ok(true) failed.";
	}
	
	if (assert.ok(false, "testing assert.ok(false)") === false) {
		console.log("assert.ok(false) OK");
	} else {
		console.error("assert.ok(false) failed.");
		throw "assert.ok(false) failed.";
	}

	if (assert.equal(true, true, "testing assert.equal(true, true, msg)") === true) {
		console.log("assert.equal(true, true, msg) OK");
	} else {
		console.error("assert.equal(true, true, msg) Failed!");
		throw "assert.equal(true, true, msg) Failed!";
	}
	if (assert.equal(true, false, "testing assert.equal(true, false, msg)") === false) {
		console.log("assert.equal(true, false, msg) OK");
	} else {
		console.error("assert.equal(true, false, msg) Failed!");
		throw "assert.equal(true, false, msg) Failed!";
	}
	if (assert.equal(true, 1, "testing assert.equal(true, 1, msg)") === true) {
		console.log("assert.equal(true, 1, msg) OK");
	} else {
		console.error("assert.equal(true, 1, msg) Failed!");
		throw "assert.equal(true, 1, msg) Failed!";
	}
	if (assert.equal(true, 0, "testing assert.equal(true, 0, msg)") === false) {
		console.log("assert.equal(true, 0, msg) OK");
	} else {
		console.error("assert.equal(true, 0, msg) Failed!");
		throw "assert.equal(true, 0, msg) Failed!";
	}
	
	if (assert.notEqual(true, false, "testing assert.notEqual(true, false, msg)") === true) {
		console.log("assert.notEqual(true, false, msg) OK");
	} else {
		console.error("assert.notEqual(true, false, msg) Failed!");
		throw "assert.notEqual(true, false, msg) Failed!";
	}
	if (assert.notEqual(true, true, "testing assert.notEqual(true, false, msg)") === false) {
		console.log("assert.notEqual(true, true, msg) OK");
	} else {
		console.error("assert.notEqual(true, true, msg) Failed!");
		throw "assert.notEqual(true, true, msg) Failed!";
	}
	if (assert.notEqual(true, 0, "testing assert.notEqual(true, 0, msg)") === true) {
		console.log("assert.notEqual(true, 0, msg) OK");
	} else {
		console.error("assert.notEqual(true, 0, msg) Failed!");
		throw "assert.notEqual(true, 0, msg) Failed!";
	}
	if (assert.notEqual(true, 1, "testing assert.notEqual(true, 1, msg)") === false) {
		console.log("assert.notEqual(true, 1, msg) OK");
	} else {
		console.error("assert.notEqual(true, 1, msg) Failed!");
		throw "assert.notEqual(true, 1, msg) Failed!";
	}

	
	if (assert.strictEqual(true, true, "testing assert.strictEqual(true, true, msg)") === true) {
		console.log("assert.strictEqual(true, true, msg) OK");
	} else {
		console.error("assert.strictEqual(true, true, msg) Failed!");
		throw "assert.strictEqual(true, true, msg) Failed!";
	}
	if (assert.strictEqual(true, false, "testing assert.strictEqual(true, false, msg)") === false) {
		console.log("assert.strictEqual(true, false, msg) OK");
	} else {
		console.error("assert.strictEqual(true, false, msg) Failed!");
		throw "assert.strictEqual(true, false, msg) Failed!";
	}
	if (assert.strictEqual(true, 1, "testing assert.strictEqual(true, 1, msg)") === false) {
		console.log("assert.strictEqual(true, 1, msg) OK");
	} else {
		console.error("assert.strictEqual(true, 1, msg) Failed!");
		throw "assert.strictEqual(true, 1, msg) Failed!";
	}
	if (assert.strictEqual(true, 0, "testing assert.strictEqual(true, 0, msg)") === false) {
		console.log("assert.strictEqual(true, 0, msg) OK");
	} else {
		console.error("assert.strictEqual(true, 0, msg) Failed!");
		throw "assert.strictEqual(true, 0, msg) Failed!";
	}

	
	if (assert.strictNotEqual(true, false, "testing assert.strictNotEqual(true, false, msg)") === true) {
		console.log("assert.strictNotEqual(true, false, msg) OK");
	} else {
		console.error("assert.strictNotEqual(true, false, msg) Failed!");
		throw "assert.strictNotEqual(true, false, msg) Failed!";
	}
	if (assert.strictNotEqual(true, true, "testing assert.strictNotEqual(true, false, msg)") === false) {
		console.log("assert.strictNotEqual(true, true, msg) OK");
	} else {
		console.error("assert.strictNotEqual(true, true, msg) Failed!");
		throw "assert.strictNotEqual(true, true, msg) Failed!";
	}
	if (assert.strictNotEqual(true, 0, "testing assert.strictNotEqual(true, 0, msg)") === true) {
		console.log("assert.strictNotEqual(true, 0, msg) OK");
	} else {
		console.error("assert.strictNotEqual(true, 0, msg) Failed!");
		throw "assert.strictNotEqual(true, 0, msg) Failed!";
	}
	
	console.log("Success!");

	console.log("Setting up harness.js tests...");	
	harness.push({callback: function () {
	}, label: "Testing harness"});
	console.log("Calling harness.RunIt()");
	harness.RunIt("harness.js", 10, true);
}());