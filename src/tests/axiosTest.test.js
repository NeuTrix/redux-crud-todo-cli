import axios from 'axios';
import chai, { expect } from 'chai';

xdescribe('the axios test', () => {
	let api = 'http://localhost:8080/api/todos';
	let todoList; 

	const runTest = (url) => {
		axios.get(url)
			.then((res) => {
				console.log('*** 1st *** the todoList:  ',todoList);
				let list = res.data;
				console.log('*** 2nd *** the todoList:  ',list);
			})
			.then((list) => {

				todoList= list;
				console.log('*** 3rd *** the todoList:  ',list);
			})
			.catch((err) => {
				console.log('there as an error', err);
			});
	};

	it('it returns an object', () => {

		let max =	runTest(api);
		expect(max).to.be.an('string');
	});

});
