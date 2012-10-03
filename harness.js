//
// A simple test harness to run groups of tests as a simple setInterval
// service.
//
// @author: R. S. Doiel, <rsdoiel@gmail.com>
// copyright (c) 2012 all rights reserved
//
// Released under this Simplified BSD License.
// See: http://opensource.org/licenses/bsd-license.php
//
//
/*jslint devel: true, node: true, maxerr: 50, indent: 4,  vars: true, sloppy: true */
(function (global, undefined) {
	var test_groups = [],
		running_tests = [],
		complete_called = false;
	
	// Push a test batch into harness
	var push = function (test) {
		if (test.callback === undefined) {
			throw "missing function definition.";
		}
		if (test.label === undefined) {
			throw "missing test label.";
		}
		test_groups.push(test);
	};
	
	var completed = function (label) {
		var i = running_tests.indexOf(label);
		complete_called = true;
		if (i >= 0) {
			running_tests[i] = "";
			console.log("\t\t" + label + " OK");
			return true;
		}
		return false;
	};
	
	var RunIt = function (module_name, test_delay) {
		var int_id;
	
		if (module_name === undefined) {
			module_name = "Untitled module tests";
		}
		if (test_delay === undefined) {
			test_delay = 1000;
		}
	
		console.log("Starting [" + module_name.trim() + "] ...");
		int_id = setInterval(function () {
			var group_test = test_groups.shift();
			if (group_test &&
					typeof group_test.callback === "function" &&
					typeof group_test.label === "string") {
				console.log("\tStarting " + group_test.label + " ...");
				running_tests.push(group_test.label);
				group_test.callback();
				console.log("\t\t" + group_test.label + " called");
			} else if (group_test === undefined) {
				if (complete_called === false) {
					throw "harness.completed(label) never called by tests.";
				}
				if (running_tests.join("") !== "") {
					running_tests.forEach(function (item) {
						if (item.trim() !== "") {
							console.log("\t\t" + item +
								" incomplete!");
						}
					});
				} else {
					console.log(module_name.trim() + " Success!");
				}
				clearInterval(int_id);
			} else {
				throw module_name.trim() + " Failed!";
			}
		}, test_delay);
	};
	
	global.harness = {};
	global.harness.push = push;
	global.harness.completed = completed;
	global.harness.RunIt = RunIt;

	try {
		exports.push = push;
		exports.completed = completed;
		exports.RunIt = RunIt;
		exports.RunInMongoShell = RunInMongoShell;
	} catch (err) {
		console.log("Running in browser.");
	}
}(this));
