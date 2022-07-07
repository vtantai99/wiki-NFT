import { call, put, takeLatest } from 'redux-saga/effects'
import { notification } from 'antd'

import { REQUEST, SUCCESS, FAILURE } from 'Stores'

import { CHANGE_COLLECT_DES, CHANGE_ROAD_MAP, CHANGE_TAGS } from './constants'
import { CHANGE_SUCCESS } from 'Stores/actionType'
import { delay } from 'Utils'

export function* changeCollectDesSaga({ payload })
{   const { data, name, callback } = payload
    try {
        yield call(delay)
        yield put({
            type: SUCCESS(CHANGE_COLLECT_DES),
            data
        })
        notification.success({
            message: CHANGE_SUCCESS(name)
        })
        callback()
    } catch (error) {
        yield put({
            type: FAILURE(CHANGE_COLLECT_DES),
            error
        })
    }
}

export function* changeTagsSaga({ payload })
{   const { data, name, callback } = payload
    try {
        yield call(delay)
        yield put({
            type: SUCCESS(CHANGE_TAGS),
            data
        })
        notification.success({
            message: CHANGE_SUCCESS(name)
        })
        callback()
    } catch (error) {
        yield put({
            type: FAILURE(CHANGE_TAGS),
            error
        })
    }
}

export function* changeRoadMapSaga({ payload })
{   const { data, name, callback } = payload
    try {
        yield call(delay)
        yield put({
            type: SUCCESS(CHANGE_ROAD_MAP),
            data
        })
        notification.success({
            message: CHANGE_SUCCESS(name)
        })
        callback()
    } catch (error) {
        yield put({
            type: FAILURE(CHANGE_ROAD_MAP),
            error
        })
    }
}

export default function* wikiCollectSaga()
{
    yield takeLatest(REQUEST(CHANGE_COLLECT_DES), changeCollectDesSaga)
    yield takeLatest(REQUEST(CHANGE_TAGS), changeTagsSaga)
    yield takeLatest(REQUEST(CHANGE_ROAD_MAP), changeRoadMapSaga)
}