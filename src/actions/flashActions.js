import { 
	ADD_FLASH_MESSAGE,
	DELETE_FLASH_MESSAGE  
} from './typeConstants'

export function addFlashMessage(message) {
	return {
		type: ADD_FLASH_MESSAGE,
		payload: { message }
	}
}

export function deleteFlashMessage(_id) {
	return {
		type: DELETE_FLASH_MESSAGE,
		payload: { _id }
	}
}



