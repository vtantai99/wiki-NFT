import { REQUEST } from 'Stores'
import { CHANGE_COLLECT_DES, CHANGE_ROAD_MAP, CHANGE_TAGS } from './constants'

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
