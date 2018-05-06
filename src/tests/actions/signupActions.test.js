import chai,{ expect } from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);
import deepfreeze from 'deep-freeze';
import AuthReducer from '../../reducers/authReducer';
import * as mod from '../../actions/signupActions';

describe ('The Login Action..', () => {
  const initState = {
    isAuthenicated: false,
    registerHasError: false,
    registerHasSuccess: false,
    registerIsPosting: false,
    user: {}
  };

  const profile1 = {
    username:'UserProfile_1',
    email: 'ww@ww.com',
    emailConfirm: 'ww@ww.com',
    password: 'XX',
    passwordConfirm: 'XX',
  }

  const profile2 = {
    username:'UserProfile_2',
    email: 'ww@ww.com', 
    emailConfirm: 'ww@ww.com',
    password: 'Zman',
    passwordConfirm: 'Zman',
  }
  
  it('...registers a loading event', () => {
    // let readState= AuthReducer(initState, mod.registerIsPosting(true));
    let readState= AuthReducer(initState, mod.setCurrentUser(profile1));
    deepfreeze(readState); 
    expect(readState.user.username).to.eql('UserProfile_1')
   } )

  it('...can make a successful api call', (done) => {

  })

});
