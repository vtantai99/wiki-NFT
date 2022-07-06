import { useDispatch, useSelector } from "react-redux"

import saga from 'Modules/wiki_collection/store/saga'
import reducer from 'Modules/wiki_collection/store/reducer'
import { useInjectReducer, useInjectSaga } from "Stores"
import { changeCollectDes } from "Modules/wiki_collection/store/actions"
import { makeSelectWikiCollect } from "Modules/wiki_collection/store/selectors"

export const useWikiCollect = () => {
    useInjectSaga({ key: 'wikiCollect', saga })
    useInjectReducer({ key: 'wikiCollect', reducer })

    const dispatch = useDispatch()

    const { collectDes } = useSelector(makeSelectWikiCollect())

    const changeCollectDesAction = (payload) => dispatch(changeCollectDes(payload))

    return {
        collectDes,
        changeCollectDesAction,
    }
}