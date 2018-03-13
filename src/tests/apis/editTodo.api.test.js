import chai from 'chai';
import { expect } from 'chai';
import axios from 'axios';
import shortid from 'shortid'
import Todo from ''
import store from '../../store/store'

import { editTodo } from '../../actions/editActions'


describe ('The editTodo function structure', () => {

 	let api = 'http://localhost:3003/api/todos';
	let _id = shortid.generate()
	let data ={task:"fix this" }
	let dispatch = store.dispatch

	it ('... the url structure produces a working url string', () => {
		expect(`${api}`).to.be.a('string').to.eql(api)
		expect(`${_id}`).to.be.a('string').to.eql(_id)
		expect(`${api}/${_id}`).to.be.a('string')
	});

	it ('... axios call', (done) => {

		axios.put (`${api}/${_id}`, data)

			.then ((res) => {
				if (res.status !== 200) {
					throw Error (res.statusText);
					console.log()
				} else {
					dispatch (editItem (_id, res.data.todo))
					console.log(res)
					console.log(res.data)
				}
			})
			
			.catch ((err) => {
				// console.error(err);
			})
			done()

	});

});

describe ('', () => {

});