
let assert = require('assert');
let KW = require('./index.js');


let tests = ["OL1B/00012345/6;7","SI1G/00012345/6;6","KZ1J/00012345;4","OL1B/12345/6;7","SI1G/012345/6;6","KZ1J/0012345/4;4"];

tests.map((t)=>{
		let r = t.split(';');
		return {kw:r[0], expect:parseInt(r[1])};
	}).forEach((t)=>{
		console.log(t);
		assert.strictEqual(KW.checksum(t.kw), t.expect);	
		console.log("ok");
	});
