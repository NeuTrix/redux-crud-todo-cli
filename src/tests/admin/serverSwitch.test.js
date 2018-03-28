import axios from 'axios'
import chai, { expect } from 'chai'
import { createTodo } from '../../actions/createActions';
import { deleteTodo } from '../../actions/deleteActions';
import { editTodo } from '../../actions/editActions';
import { userLoginRequest } from '../../actions/loginActions';
import { userSignupRequest } from '../../actions/signupActions';
import { readTodos } from '../../actions/readActions';
/*import { 
	getHeroku, 
	getLocal 
} from '../../actions/admin/serverSwitchActions.js'
*/

xdescribe ('The serverSwitchActions', () => {

	let apiLocal = 'http://localhost:8080/api/todos' 
	let apiHeroku = 'https://redux-todo-api.herokuapp.com/api/todos'


	describe ('... can connect to the heroku base url', () => {


		it ('... sets the createTodo api to heroku', () => {

			expect()
		});

		it ('... sets the readTodos api to heroku', () => {

		});

		it ('... sets the editTodo api to heroku', () => {

		});

		it ('... sets the deleteTodo api to heroku', () => {

		});

		it ('... sets the userLoginRequest api to heroku', () => {

		});

		it ('... sets the userSignupRequest api to heroku', () => {

		});


it ('... sets the createTodo api to heroku', () => {

		});

	});

	describe ('... can swith to the local host url', () => {

	});

});