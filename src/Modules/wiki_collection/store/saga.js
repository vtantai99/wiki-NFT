import { call, put, takeLatest } from 'redux-saga/effects'
import { notification } from 'antd'

import { REQUEST, SUCCESS, FAILURE } from 'Stores'

import { CHANGE_COLLECT_DES } from './constants'
import { CHANGE_SUCCESS } from 'Stores/actionType'

export function* changeCollectDesSaga({ payload })
{   const { data, name } = payload
    console.log('Boy ==>', payload)
    try {
        const delay = time => new Promise(resolve => setTimeout(resolve, time))
        yield call(delay, 500)
        yield put({
            type: SUCCESS(CHANGE_COLLECT_DES),
            data
        })
        notification.success({
            message: CHANGE_SUCCESS(name)
        })
    } catch (error) {
        yield put({
            type: FAILURE(CHANGE_COLLECT_DES),
            error
        })
    }
}

export default function* wikiCollectSaga()
{
    yield takeLatest(REQUEST(CHANGE_COLLECT_DES), changeCollectDesSaga)
}