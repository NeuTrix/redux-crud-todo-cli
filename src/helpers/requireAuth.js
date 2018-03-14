import React, { Component }  from 'react'

export default function (ComposedComponent) {

	class  Authenticate extends Component{

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
	return Authenticate;
}
