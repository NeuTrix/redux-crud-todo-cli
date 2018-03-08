import { ADD_FLASH_MESSAGE } from './typeConstants'

export function addFlashMessage(message) {
	return {
		type: ADD_FLASH_MESSAGE,
		payload: {
			message: message
		}
	}
}

