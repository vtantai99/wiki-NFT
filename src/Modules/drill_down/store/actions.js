import { REQUEST } from 'Stores'
import { CHANGE_COLLECT_DES, CHANGE_FAN_PHOTO, CHANGE_FAQ, CHANGE_NOTABLE_HOLDER, CHANGE_PREVIOUS_OWNERS, CHANGE_ROAD_MAP, CHANGE_SWAG, CHANGE_TAGS, CHANGE_TEAM, CHANGE_TRIVIA } from './constants'

export const changeCollectDes = (payload) => ({
    type: REQUEST(CHANGE_COLLECT_DES),
    payload
})

export const changeTags = (payload) => ({
    type: REQUEST(CHANGE_TAGS),
    payload
})

export const changeRoadMap = (payload) => ({
    type: REQUEST(CHANGE_ROAD_MAP),
    payload
})

export const changeNotableHolder = (payload) => ({
    type: REQUEST(CHANGE_NOTABLE_HOLDER),
    payload
})

export const changePreviousOwners = (payload) => ({
    type: REQUEST(CHANGE_PREVIOUS_OWNERS),
    payload
})

export const changeTeam = (payload) => ({
    type: REQUEST(CHANGE_TEAM),
    payload
})

export const changeSwag = (payload) => ({
    type: REQUEST(CHANGE_SWAG),
    payload
})

export const changeFanPhoto = (payload) => ({
    type: REQUEST(CHANGE_FAN_PHOTO),
    payload
})

export const changeFAQ = (payload) => ({
    type: REQUEST(CHANGE_FAQ),
    payload
})

export const changeTrivia = (payload) => ({
    type: REQUEST(CHANGE_TRIVIA),
    payload
})


