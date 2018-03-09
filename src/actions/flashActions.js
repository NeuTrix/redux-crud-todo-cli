import { ADD_FLASH_MESSAGE } from './typeConstants'
import { DELETE_FLASH_MESSAGE } from './typeConstants'

export function addFlashMessage(message) {
	return {
		type: ADD_FLASH_MESSAGE,
		payload: {
			message: message
		}
	}
}

export function deleteFlashMessage(id) {
	return {
		type: DELETE_FLASH_MESSAGE,
		payload: {
			id: id
		}
	}
}



