import { createReducer, updateObject, REQUEST, SUCCESS, FAILURE } from 'Stores'
import { CHANGE_COLLECT_DES } from './constants'
import { COLLECT_DES } from './text'

export const initialState = {
    collectDes: {
        isLoading: false,
        data: COLLECT_DES,
        error: null
    }
}

function changeCollectDes(state) {
    return updateObject(state, {
        collectDes: {
            ...state.collectDes,
            isLoading: true
        }
    })
}

function changeCollectDesSuccess(state, { data }) {
    return updateObject(state, {
        collectDes: {
            ...state.collectDes,
            isLoading: false,
            data
        }
    })
}

function changeCollectDesFailure(state) {
    return updateObject(state, {
        error: null,
        isLoading: false
    })
}

export default createReducer(initialState, {
    [REQUEST(CHANGE_COLLECT_DES)]: changeCollectDes,
    [SUCCESS(CHANGE_COLLECT_DES)]: changeCollectDesSuccess,
    [FAILURE(CHANGE_COLLECT_DES)]: changeCollectDesFailure
})