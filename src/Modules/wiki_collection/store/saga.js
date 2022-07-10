import { call, put, takeLatest } from 'redux-saga/effects'
import { notification } from 'antd'

import { REQUEST, SUCCESS, FAILURE } from 'Stores'

import { CHANGE_COLLECT_DES, CHANGE_FAN_PHOTO, CHANGE_FAQ, CHANGE_NOTABLE_HOLDER, CHANGE_ROAD_MAP, CHANGE_SWAG, CHANGE_TAGS, CHANGE_TEAM, CHANGE_TRIVIA } from './constants'
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

export function* changeNotableHolderSaga({ payload })
{   const { data, name, callback } = payload
    try {
        yield call(delay)
        yield put({
            type: SUCCESS(CHANGE_NOTABLE_HOLDER),
            data
        })
        notification.success({
            message: CHANGE_SUCCESS(name)
        })
        callback()
    } catch (error) {
        yield put({
            type: FAILURE(CHANGE_NOTABLE_HOLDER),
            error
        })
    }
}

export function* changeTeamSaga({ payload })
{   const { data, name, callback } = payload
    try {
        yield call(delay)
        yield put({
            type: SUCCESS(CHANGE_TEAM),
            data
        })
        notification.success({
            message: CHANGE_SUCCESS(name)
        })
        callback()
    } catch (error) {
        yield put({
            type: FAILURE(CHANGE_TEAM),
            error
        })
    }
}

export function* changeSwagSaga({ payload })
{   const { data, name, callback } = payload
    try {
        yield call(delay)
        yield put({
            type: SUCCESS(CHANGE_SWAG),
            data
        })
        notification.success({
            message: CHANGE_SUCCESS(name)
        })
        callback()
    } catch (error) {
        yield put({
            type: FAILURE(CHANGE_SWAG),
            error
        })
    }
}

export function* changeFanPhotoSaga({ payload })
{   const { data, name, callback } = payload
    try {
        yield call(delay)
        yield put({
            type: SUCCESS(CHANGE_FAN_PHOTO),
            data
        })
        notification.success({
            message: CHANGE_SUCCESS(name)
        })
        callback()
    } catch (error) {
        yield put({
            type: FAILURE(CHANGE_FAN_PHOTO),
            error
        })
    }
}

export function* changeFAQSaga({ payload })
{   const { data, name, callback } = payload
    try {
        yield call(delay)
        yield put({
            type: SUCCESS(CHANGE_FAQ),
            data
        })
        notification.success({
            message: CHANGE_SUCCESS(name)
        })
        callback()
    } catch (error) {
        yield put({
            type: FAILURE(CHANGE_FAQ),
            error
        })
    }
}


export function* changeTriviaSaga({ payload })
{   const { data, name, callback } = payload
    try {
        yield call(delay)
        yield put({
            type: SUCCESS(CHANGE_TRIVIA),
            data
        })
        notification.success({
            message: CHANGE_SUCCESS(name)
        })
        callback()
    } catch (error) {
        yield put({
            type: FAILURE(CHANGE_TRIVIA),
            error
        })
    }
}

export default function* wikiCollectSaga()
{
    yield takeLatest(REQUEST(CHANGE_COLLECT_DES), changeCollectDesSaga)
    yield takeLatest(REQUEST(CHANGE_TAGS), changeTagsSaga)
    yield takeLatest(REQUEST(CHANGE_ROAD_MAP), changeRoadMapSaga)
    yield takeLatest(REQUEST(CHANGE_NOTABLE_HOLDER), changeNotableHolderSaga)
    yield takeLatest(REQUEST(CHANGE_TEAM), changeTeamSaga)
    yield takeLatest(REQUEST(CHANGE_SWAG), changeSwagSaga)
    yield takeLatest(REQUEST(CHANGE_FAN_PHOTO), changeFanPhotoSaga)
    yield takeLatest(REQUEST(CHANGE_FAQ), changeFAQSaga)
    yield takeLatest(REQUEST(CHANGE_TRIVIA), changeTriviaSaga)
}