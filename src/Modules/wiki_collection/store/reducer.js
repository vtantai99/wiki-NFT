import { createReducer, updateObject, REQUEST, SUCCESS, FAILURE } from 'Stores'
import { CHANGE_COLLECT_DES, CHANGE_FAN_PHOTO, CHANGE_FAQ, CHANGE_NOTABLE_HOLDER, CHANGE_ROAD_MAP, CHANGE_SWAG, CHANGE_TAGS, CHANGE_TEAM, CHANGE_TRIVIA } from './constants'
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
    },
    notable_holders: {
        isSubmitting: false,
        data: WIKI_COLLECTION_DATA.NOTABLE_HOLDER,
        error: null
    },
    team: {
        isSubmitting: false,
        data: WIKI_COLLECTION_DATA.TEAM,
        error: null
    },
    swag: {
        isSubmitting: false,
        data: WIKI_COLLECTION_DATA.SWAG,
        error: null
    },
    fanPhoto: {
        isSubmitting: false,
        data: WIKI_COLLECTION_DATA.FAN_PHOTO,
        error: null
    },
    faq: {
        isSubmitting: false,
        data: WIKI_COLLECTION_DATA.FAQ,
        error: null
    },
    trivia: {
        isSubmitting: false,
        data: WIKI_COLLECTION_DATA.TRIVIA,
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

function changeCollectDesFailure(state, { error }) {
    return updateObject(state, {
        collectDes: {
            ...state.collectDes,
            isSubmitting: false,
            error
        }
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

function changeTagsFailure(state, { error }) {
    return updateObject(state, {
        tags: {
            ...state.collectDes,
            isSubmitting: false,
            error
        }
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

function changeRoadMapFailure(state, { error }) {
    return updateObject(state, {
        roadMap: {
            ...state.roadMap,
            isSubmitting: false,
            error
        }
    })
}

function changeNotableHolder(state) {
    return updateObject(state, {
        notable_holders: {
            ...state.notable_holders,
            isSubmitting: true
        }
    })
}

function changeNotableHolderSuccess(state, { data }) {
    return updateObject(state, {
        notable_holders: {
            ...state.notable_holders,
            isSubmitting: false,
            data
        }
    })
}

function changeNotableHolderFailure(state, { error }) {
    return updateObject(state, {
        notable_holders: {
            ...state.notable_holders,
            isSubmitting: false,
            error
        }
    })
}


function changeTeam(state) {
    return updateObject(state, {
        team: {
            ...state.team,
            isSubmitting: true
        }
    })
}

function changeTeamSuccess(state, { data }) {
    return updateObject(state, {
        team: {
            ...state.team,
            isSubmitting: false,
            data
        }
    })
}

function changeTeamFailure(state, { error }) {
    return updateObject(state, {
        team: {
            ...state.team,
            isSubmitting: false,
            error
        }
    })
}

function changeSwag(state) {
    return updateObject(state, {
        swag: {
            ...state.swag,
            isSubmitting: true
        }
    })
}

function changeSwagSuccess(state, { data }) {
    return updateObject(state, {
        swag: {
            ...state.swag,
            isSubmitting: false,
            data
        }
    })
}

function changeFanPhoto(state) {
    return updateObject(state, {
        fanPhoto: {
            ...state.fanPhoto,
            isSubmitting: true
        }
    })
}

function changeFanPhotoSuccess(state, { data }) {
    return updateObject(state, {
        fanPhoto: {
            ...state.fanPhoto,
            isSubmitting: false,
            data
        }
    })
}

function changeFAQ(state) {
    return updateObject(state, {
        faq: {
            ...state.faq,
            isSubmitting: true
        }
    })
}

function changeFAQSuccess(state, { data }) {
    return updateObject(state, {
        faq: {
            ...state.faq,
            isSubmitting: false,
            data
        }
    })
}

function changeTrivia(state) {
    return updateObject(state, {
        trivia: {
            ...state.trivia,
            isSubmitting: true
        }
    })
}

function changeTriviaSuccess(state, { data }) {
    return updateObject(state, {
        trivia: {
            ...state.trivia,
            isSubmitting: false,
            data
        }
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
    [FAILURE(CHANGE_ROAD_MAP)]: changeRoadMapFailure,

    [REQUEST(CHANGE_NOTABLE_HOLDER)]: changeNotableHolder,
    [SUCCESS(CHANGE_NOTABLE_HOLDER)]: changeNotableHolderSuccess,
    [FAILURE(CHANGE_NOTABLE_HOLDER)]: changeNotableHolderFailure,

    [REQUEST(CHANGE_TEAM)]: changeTeam,
    [SUCCESS(CHANGE_TEAM)]: changeTeamSuccess,
    [FAILURE(CHANGE_TEAM)]: changeTeamFailure,

    [REQUEST(CHANGE_SWAG)]: changeSwag,
    [SUCCESS(CHANGE_SWAG)]: changeSwagSuccess,

    [REQUEST(CHANGE_FAN_PHOTO)]: changeFanPhoto,
    [SUCCESS(CHANGE_FAN_PHOTO)]: changeFanPhotoSuccess,

    [REQUEST(CHANGE_FAQ)]: changeFAQ,
    [SUCCESS(CHANGE_FAQ)]: changeFAQSuccess,

    [REQUEST(CHANGE_TRIVIA)]: changeTrivia,
    [SUCCESS(CHANGE_TRIVIA)]: changeTriviaSuccess
})