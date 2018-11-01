import React from 'react';
import { render } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginForm from '../../components/auth/LoginForm';

describe('The LoginForm', () => {
  const authApi = {
    loginIsPosting: true,
  };

  const addFlashMessage = () => f;
  const wrapper = render(
    <Router>
      <LoginForm 
        authApi={authApi}
        addFlashMessage={addFlashMessage}
      />
    </Router>
  );

  it('...renders the login form', () => {
    expect(wrapper).toMatchSnapshot();
  });

});