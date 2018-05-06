import chai,{ expect } from 'chai';
import chaiHttp from 'chai-http';
import deepfreeze from 'deep-freeze';
import isEmpty from 'lodash';
import validator from 'validator';
// custom
import AuthReducer, { initialState } from '../../reducers/authReducer';
import {
	setCurrentUser,
	registerIsPosting,
	registerHasError,
	registerSucceeded,
} from '../../actions/signupActions';

chai.use(chaiHttp);

describe ('The signupAction\'s authReducer...', () => {
	deepfreeze(initialState);

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
		expect(initialState).have.property('isAuthenticated').to.eql(false);
		expect(initialState).have.property('registerHasError').to.eql(false);
		expect(initialState).have.property('registerHasSucceeded').to.eql(false);
		expect(initialState).have.property('registerIsPosting').to.eql(false);
		expect(initialState).have.property('registerIsPosting').to.eql(false);
		expect(Object.keys(initialState).length).to.eql(5);
	});
	
	describe('The setCurrentUser Action...', () => {
		let readState = AuthReducer(initialState, setCurrentUser(profile_1));

		it('...has the correct number of props', () => {
			expect(Object.keys(readState).length).to.eql(5);
		});
	
		it('...can reset the current user prop', () => {
			expect(readState.user).to.eql(profile_1);
		});

		it('...can reset the isAuthentication prop', () => {
			expect(readState.isAuthenticated).to.eql(true);
		});
	});

	describe('The setCurrentUser Action...', () => {
		let readState = AuthReducer(initialState, registerIsPosting(true));

		it('...has the correct number of props', () => {
			expect(Object.keys(readState).length).to.eql(5);
		});
	
		it('...can reset the registerIsPosting prop', () => {
			expect(readState.registerIsPosting).to.eql(true);
		});
	});

	describe('The registerIsPosting Action...', () => {
		let readState = AuthReducer(initialState, registerIsPosting(true));

		it('...has the correct number of props', () => {
			expect(Object.keys(readState).length).to.eql(5);
		});
	
		it('...can reset the registerIsPosting prop', () => {
			expect(readState.registerIsPosting).to.eql(true);
		});
	});

	xdescribe('The registerSucceeded Action...', () => {
		let readState = AuthReducer(initialState, registerHasSucceeded(true));

		it('...has the correct number of props', () => {
			expect(Object.keys(readState).length).to.eql(5);
		});
	
		it('...can reset the registerSucceeded prop', () => {
			expect(readState.registerSucceeded).to.eql(true);
		});
	});

	describe('The registerHasError Action...', () => {
		let readState = AuthReducer(initialState, registerHasError(true));

		it('...has the correct number of props', () => {
			expect(Object.keys(readState).length).to.eql(5);
		});
	
		it('...can reset the registerHasError prop', () => {
			expect(readState.registerHasError).to.eql(true);
		});
	});
	
});
