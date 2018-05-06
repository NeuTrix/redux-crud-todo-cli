import chai,{ expect } from 'chai';
import chaiHttp from 'chai-http';
import deepfreeze from 'deep-freeze';
import isEmpty from 'lodash';
import validator from 'validator';
// custom
import AuthReducer, { initialState } from '../../reducers/authReducer';
import * as mod from '../../actions/signupActions';

chai.use(chaiHttp);

describe ('The signupAction\'s authReducer...', () => {
	const iState = initialState;
	deepfreeze(iState);

	const profile_1 = {
		username:'UserProfile_1',
		email: 'ww@ww.com',
		emailConfirm: 'ww@ww.com',
		password: 'XX',
		passwordConfirm: 'XX',
	};

	const profile_2 = {
		username:'UserProfile_2',
		email: 'ww@ww.com', 
		emailConfirm: 'ww@ww.com',
		password: 'Zman',
		passwordConfirm: 'Zman',
	};

	// const app = 'https://redux-todo-api.herokuapp.com/api/register';
	// const agent = chai.request.agent(app);
	it('...imports the correct initial state object', ( ) => {
		expect(iState).have.property('isAuthenticated').to.eql(false);
		expect(iState).have.property('registerHasError').to.eql(false);
		expect(iState).have.property('registerHasSuccess').to.eql(false);
		expect(iState).have.property('registerIsPosting').to.eql(false);
		expect(iState).have.property('registerIsPosting').to.eql(false);
		expect(Object.keys(iState).length).to.eql(5);
	});
	
	describe('The setCurrentUser Action...', () => {
		let readState = AuthReducer(iState, mod.setCurrentUser(profile_1));
		console.log(readState);
		it('...can set the current user and isAuthenticated props', () => {
			expect(Object.keys(readState).length).to.eql(5);
		});
	});

	xit('... has a working registerIsPosting fn', () => {
		// let readState= AuthReducer(initialState, mod.registerIsPosting(true));
		let readState= AuthReducer(iState, mod.registerIsPosting(true));
		// deepfreeze(readState); 
		
		console.log(readState);
		expect(readState.registerIsPosting).to.eql(true);
	});
	
	it('...can make a successful api call');

});
