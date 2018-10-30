import chai, { expect } 	from 'chai';
import deepFreeze from 'deep-freeze';
import  flashReducer from '../../reducers/flashReducer';
import * as mod from '../../actions/flashActions';

describe ('FLASH message actions', () => {

	const msg_success = { type: 'success',text: 'Good work!'};
	const msg_error = { type: 'error', text:'Oooopps! error'};

	describe ('... can add a new success message', () => {
		let init_msg = [];
		deepFreeze(init_msg);
		let messages = 
			flashReducer (init_msg, mod.addFlashMessage (msg_success));
		
		let added = messages[0];

		it ('... adds a new object to the array', () => {
			expect(messages.length).to.eql(init_msg.length + 1);
		});

		it ('... has an id property', () => {
			expect(added).to.be.an('object');
			expect(added).to.have.property('id');
		});

		it ('... has type property with correct value', () => {
			expect(added).to.have.property('type').eql(msg_success.type);
		});

		it ('... has text property with correct value', () => {
			expect(added).to.have.property('text').eql(msg_success.text);
		});
	});

	describe ('... can add a new error message', () => {
		let init_msg = [];
		deepFreeze(init_msg);
		let messages = 
			flashReducer (init_msg, mod.addFlashMessage (msg_error));
		let added = messages[0];

		it ('... adds a new object to the array', () => {
			expect(messages.length).to.eql(init_msg.length + 1);
		});

		it ('... has an id property', () => {
			expect(added).to.be.an('object');
			expect(added).to.have.property('id');
		});

		it ('... has type property with correct value', () => {
			expect(added).to.have.property('type').eql(msg_error.type);
		});

		it ('... has text property with correct value', () => {
			expect(added).to.have.property('text').eql(msg_error.text);
		});
	});

	describe ('... can delete a message', () => {
		let init_msg = [];
		deepFreeze(init_msg);
		let nextMessages = 
			flashReducer (init_msg, mod.addFlashMessage (msg_success));
		deepFreeze(nextMessages);
		let messages = 
			flashReducer (nextMessages, mod.addFlashMessage (msg_error));
		deepFreeze(messages);
		let added = messages[0];

		it ('... adds a new object to the array', () => {
			expect(nextMessages.length).to.eql(init_msg.length + 1);
			expect(messages.length).to.eql(nextMessages.length + 1);
		});

		it ('... has an id property', () => {
			expect(added).to.be.an('object');
			expect(added).to.have.property('id');
		});

		it ('... can delete a message', () => {
			let newMsgs = 
				flashReducer(messages, mod.deleteFlashMessage(added.id));
			expect(newMsgs.length).to.eql(messages.length - 1);
		});

	});
});
