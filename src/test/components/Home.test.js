
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'enzyme';
import Home from '../../components/main/Home';

describe('The Home component', () => {
  const wrapper = render(
    <Router>
      <Home/>
    </Router>
  );

  it('...renders correctly', () => {
    expect(wrapper).toMatchSnapshot({
      class: expect.any(String)
    });
  });

});