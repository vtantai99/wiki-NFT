import { REQUEST } from 'Stores'
import { CHANGE_COLLECT_DES } from './constants'

export const changeCollectDes = (payload) => ({
    type: REQUEST(CHANGE_COLLECT_DES),
    payload
})
