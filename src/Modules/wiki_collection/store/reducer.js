import { createReducer, updateObject, REQUEST, SUCCESS, FAILURE } from 'Stores'
import { CHANGE_COLLECT_DES, CHANGE_ROAD_MAP, CHANGE_TAGS } from './constants'
import { WIKI_COLLECTION_DATA } from './text'

export const initialState = {
    collectDes: {
        isSubmitting: false,
        data: WIKI_COLLECTION_DATA.COLLECT_DES,
        error: null
    },
    tags: {
        isSubmitting: false,
        data: WIKI_COLLECTION_DATA.TAGS,
        error: null
    },
    roadMap: {
        isSubmitting: false,
        data: WIKI_COLLECTION_DATA.ROAD_MAP,
        error: null
    }
}

function changeCollectDes(state) {
    return updateObject(state, {
        collectDes: {
            ...state.collectDes,
            isSubmitting: true
        }
    })
}

function changeCollectDesSuccess(state, { data }) {
    return updateObject(state, {
        collectDes: {
            ...state.collectDes,
            isSubmitting: false,
            data
        }
    })
}

function changeCollectDesFailure(state) {
    return updateObject(state, {
        error: null,
        isSubmitting: false
    })
}

function changeTags(state) {
    return updateObject(state, {
        tags: {
            ...state.tags,
            isSubmitting: true
        }
    })
}

function changeTagsSuccess(state, { data }) {
    return updateObject(state, {
        tags: {
            ...state.tags,
            isSubmitting: false,
            data
        }
    })
}

function changeTagsFailure(state) {
    return updateObject(state, {
        error: null,
        isSubmitting: false
    })
}

function changeRoadMap(state) {
    return updateObject(state, {
        roadMap: {
            ...state.roadMap,
            isSubmitting: true
        }
    })
}

function changeRoadMapSuccess(state, { data }) {
    return updateObject(state, {
        roadMap: {
            ...state.roadMap,
            isSubmitting: false,
            data
        }
    })
}

function changeRoadMapFailure(state) {
    return updateObject(state, {
        error: null,
        isSubmitting: false
    })
}

export default createReducer(initialState, {
    [REQUEST(CHANGE_COLLECT_DES)]: changeCollectDes,
    [SUCCESS(CHANGE_COLLECT_DES)]: changeCollectDesSuccess,
    [FAILURE(CHANGE_COLLECT_DES)]: changeCollectDesFailure,

    [REQUEST(CHANGE_TAGS)]: changeTags,
    [SUCCESS(CHANGE_TAGS)]: changeTagsSuccess,
    [FAILURE(CHANGE_TAGS)]: changeTagsFailure,

    [REQUEST(CHANGE_ROAD_MAP)]: changeRoadMap,
    [SUCCESS(CHANGE_ROAD_MAP)]: changeRoadMapSuccess,
    [FAILURE(CHANGE_ROAD_MAP)]: changeRoadMapFailure
})