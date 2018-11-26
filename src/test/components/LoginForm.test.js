import React from 'react';
import { render } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginForm from '../../components/auth/LoginForm';

describe('The LoginForm', () => {
	const authApi = {
		loginIsPosting: true,
	};

	const wrapper = render(
		<Router>
			<LoginForm
				authApi={authApi}
				addFlashMessage={f => f}
				userLoginRequest={f => f}
			/>
		</Router>
	);

	it('...renders the login form', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
