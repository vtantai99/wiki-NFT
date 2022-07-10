import { useDispatch, useSelector } from 'react-redux'

import saga from 'Modules/drill_down/store/saga'
import reducer from 'Modules/drill_down/store/reducer'
import { useInjectReducer, useInjectSaga } from 'Stores'
import {
  changeCollectDes,
  changeFanPhoto,
  changeNotableHolder,
  changePreviousOwners,
//   changeFanPhoto,
//   changeFAQ,
//   changeNotableHolder,
//   changeRoadMap,
//   changeSwag,
  changeTags,
//   changeTeam,
//   changeTrivia
} from 'Modules/drill_down/store/actions'
import { makeSelectDrillDown } from 'Modules/drill_down/store/selectors'

export const useDrillDown = () => {
  useInjectSaga({ key: 'drillDown', saga })
  useInjectReducer({ key: 'drillDown', reducer })

  const dispatch = useDispatch()

  const { collectDes, tags, notable_holders, fanPhoto, previousOwners } = useSelector(makeSelectDrillDown())

  const changeCollectDesAction = (payload) => dispatch(changeCollectDes(payload))
  const changeTagsAction = (payload) => dispatch(changeTags(payload))
  // const changeRoadMapAction = (payload) => dispatch(changeRoadMap(payload))
  const changeNotableHolderAction = (payload) => dispatch(changeNotableHolder(payload))
  // const changeTeamAction = (payload) => dispatch(changeTeam(payload))
  // const changeSwagAction = (payload) => dispatch(changeSwag(payload))
  const changeFanPhotoAction = (payload) => dispatch(changeFanPhoto(payload))
  const changePreviousOwnersAction = (payload) => dispatch(changePreviousOwners(payload))
  // const changeFAQAction = (payload) => dispatch(changeFAQ(payload))
  // const changeTriviaAction = (payload) => dispatch(changeTrivia(payload))

  return {
    collectDes,
    tags,
    notable_holders,
    previousOwners,
    // roadMap,
    // notable_holders,
    // team,
    // swag,
    fanPhoto,
    // faq,
    // trivia
    changeCollectDesAction,
    changeTagsAction,
    // changeRoadMapAction,
    changeNotableHolderAction,
    // changeTeamAction,
    // changeSwagAction,
    changeFanPhotoAction,
    changePreviousOwnersAction
    // changeFAQAction,
    // changeTriviaAction
  }
}
