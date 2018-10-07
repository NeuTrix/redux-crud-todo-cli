import React from 'react';
import { render } from 'enzyme';

import { BrowserRouter as Router }  from 'react-router-dom';
import LoginForm from '../../components/auth/LoginForm';

describe('The LoginForm', () => {
  const wrapper = render(
    <Router>
      <LoginForm/>
    </Router>
  );

  it('...renders the login form', () => {
    expect(wrapper).toMatchSnapshot();
  });

});