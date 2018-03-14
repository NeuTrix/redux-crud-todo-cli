import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFlashMessage } from '../actions/flashActions'

export default function (ComposedComponent) {

	class  Authenticate extends Component{

		componentWillMount() {
			let _auth = this.props.isAuthenticated
			if (!_auth) {
				this.props.addFlashMessage ({
					type: `error`,
					text: `isAuthenticated: ${_auth} `
					// `\n You must Sign In before accessing this page`
				}); 
					this.context.router.history.push('/login');
			}
		}

		render () {
			return (
				<div>
				<h1>
					So... this worked?
				</h1>
				<ComposedComponent { ...this.props } /> 
				</div>
			);
		}
	}

	Authenticate.propTyps ={
		isAuthenticated: PropTypes.bool.isRequired,
		addFlashMessage: PropTypes.func.isRequired
	}

	Authenticate.contextTypes = {
		router: PropTypes.object.isRequired
	}

	const mapStateToProps = (state) => {
		return { isAuthenticated: state.authApi.isAuthenticated }
	};

	return connect(mapStateToProps, { addFlashMessage })(Authenticate);
}
