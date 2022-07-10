import { useDispatch, useSelector } from "react-redux"

import saga from 'Modules/wiki_collection/store/saga'
import reducer from 'Modules/wiki_collection/store/reducer'
import { useInjectReducer, useInjectSaga } from "Stores"
import { changeCollectDes, changeFanPhoto, changeFAQ, changeNotableHolder, changeRoadMap, changeSwag, changeTags, changeTeam, changeTrivia } from "Modules/wiki_collection/store/actions"
import { makeSelectWikiCollect } from "Modules/wiki_collection/store/selectors"

export const useWikiCollect = () => {
    useInjectSaga({ key: 'wikiCollect', saga })
    useInjectReducer({ key: 'wikiCollect', reducer })

    const dispatch = useDispatch()

    const { collectDes, tags, roadMap, notable_holders, team, swag, fanPhoto, faq, trivia } = useSelector(makeSelectWikiCollect())

    const changeCollectDesAction = (payload) => dispatch(changeCollectDes(payload))
    const changeTagsAction = (payload) => dispatch(changeTags(payload))
    const changeRoadMapAction = (payload) => dispatch(changeRoadMap(payload))
    const changeNotableHolderAction = (payload) => dispatch(changeNotableHolder(payload))
    const changeTeamAction = (payload) => dispatch(changeTeam(payload))
    const changeSwagAction = (payload) => dispatch(changeSwag(payload))
    const changeFanPhotoAction = (payload) => dispatch(changeFanPhoto(payload))
    const changeFAQAction = (payload) => dispatch(changeFAQ(payload))
    const changeTriviaAction = (payload) => dispatch(changeTrivia(payload))

    return {
        collectDes,
        tags,
        roadMap,
        notable_holders,
        team,
        swag,
        fanPhoto,
        faq,
        trivia,
        changeCollectDesAction,
        changeTagsAction,
        changeRoadMapAction,
        changeNotableHolderAction,
        changeTeamAction,
        changeSwagAction,
        changeFanPhotoAction,
        changeFAQAction,
        changeTriviaAction
    }
}