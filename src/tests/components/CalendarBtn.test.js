/* eslint-env mocha, chai */
import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store/store';
import CalendarBtn from '../../components/CalendarBtn';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<CalendarBtn /> 
		, div
	);
});

describe('The CalendarBtn Component', () => {
	let props, mountedCalendarBtn;
	const calendarBtn = () => {
		if(!mountedCalendarBtn) {
			mountedCalendarBtn = mount (
				<CalendarBtn { ...props } /> 
			);
		}
		return mountedCalendarBtn;
	};

	beforeEach (() => {
		props = {
			date: '2018-12-31',
			_id: undefined,
			style: {},
			updateDate: undefined
		};
		mountedCalendarBtn = undefined;
	});

	describe('the wrapping Row component...', () => {
		const formCtl = calendarBtn().find('FormControl');
		const wrappingRow = formCtl.first();

		it('always renders an outer FormControl', () => {
			expect(formCtl.length).to.be.eql(1);
		});

		it('always renders a CalendarBtn component ', () => {
			const dates = calendarBtn().find('CalendarBtn');
			expect(dates.length).to.be.eql(1);
		});
	});

	describe('when rendering core components, it..', () => {
		const dateBtns = calendarBtn().find('CalendarBtn');

		it('CalendarBtn is passed (5) props', () => {
			expect(Object.keys(dateBtns.props()).length).to.eql(5);
		});

		it('has an date prop', () => {
			expect(Object.keys(dateBtns.props())).to.include('date');
		});

		it('has an editTodo prop', () => {
			expect(Object.keys(dateBtns.props())).to.include('editTodo');
		});	

		it('has an _id prop', () => {
			expect(Object.keys(dateBtns.props())).to.include('_id');
		});

		it('has an updateDate prop', () => {
			expect(Object.keys(dateBtns.props())).to.include('updateDate');
		});

		it('has an style prop', () => {
			expect(Object.keys(dateBtns.props())).to.include('style');
		});
	});
});