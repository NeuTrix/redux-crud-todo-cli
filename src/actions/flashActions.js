import * as action from './typeConstants';

export function addFlashMessage(message) {
	return {
		type: action.ADD_FLASH_MESSAGE,
		payload: { message }
	}
}

export function deleteFlashMessage(_id) {
	return {
		type: action.DELETE_FLASH_MESSAGE,
		payload: { _id }
	}
}



