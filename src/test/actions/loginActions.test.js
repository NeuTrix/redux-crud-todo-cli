import chai,{ expect } from 'chai';
import chaiHttp from 'chai-http';
import deepfreeze from 'deep-freeze';
import isEmpty from 'lodash';
import validator from 'validator';
// custom
import AuthReducer, { initialState } from '../../reducers/authReducer';
import {
	setCurrentUser,
	loginIsPosting,
	loginHasErrored,
	loginHasSucceeded,
} from '../../actions/loginActions';

chai.use(chaiHttp);

describe('The signupAction authReducer...', () => {
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

	it.only('...imports the correct initial state object', () => {
		expect(initialState).have.property('isAuthenticated').to.eql(false);
		expect(initialState).have.property('loginHasErrored').to.eql(false);
		expect(initialState).have.property('loginHasSucceeded').to.eql(false);
		expect(initialState).have.property('loginIsPosting').to.eql(false);
		expect(initialState).have.property('loginIsPosting').to.eql(false);
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
		let readState = AuthReducer(initialState, loginIsPosting(true));

		it('...has the correct number of props', () => {
			expect(Object.keys(readState).length).to.eql(5);
		});
	
		it('...can reset the loginIsPosting prop', () => {
			expect(readState.loginIsPosting).to.eql(true);
		});
	});

	describe('The loginIsPosting Action...', () => {
		let readState = AuthReducer(initialState, loginIsPosting(true));

		it('...has the correct number of props', () => {
			expect(Object.keys(readState).length).to.eql(5);
		});
	
		it('...can reset the loginIsPosting prop', () => {
			expect(readState.loginIsPosting).to.eql(true);
		});
	});

	describe('The loginHasSucceeded Action...', () => {
		let readState = AuthReducer(initialState, loginHasSucceeded(true));

		it('...has the correct number of props', () => {
			expect(Object.keys(readState).length).to.eql(5);
		});
	
		it('...can reset the loginHasSucceeded prop', () => {
			expect(readState.loginHasSucceeded).to.eql(true);
		});
	});

	describe('The loginHasErrored Action...', () => {
		let readState = AuthReducer(initialState, loginHasErrored(true));

		it('...has the correct number of props', () => {
			expect(Object.keys(readState).length).to.eql(5);
		});
	
		it('...can reset the loginHasErrored prop', () => {
			expect(readState.loginHasErrored).to.eql(true);
		});
	});
});

 