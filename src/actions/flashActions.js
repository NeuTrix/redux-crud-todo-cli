import * as mod from './typeConstants';

export function addFlashMessage(message) {
	return {
		type: mod.ADD_FLASH_MESSAGE,
		payload: { message }
	};
}

export function deleteFlashMessage(_id) {
	return {
		type: mod.DELETE_FLASH_MESSAGE,
		payload: { _id }
	};
}