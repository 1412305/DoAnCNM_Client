import { errorConstants } from '../constants/error'

export const errorActions = {
    warningError
}

function warningError(error){
    return {
        type: errorConstants.ERROR_FAILURE,
        error
    }
}