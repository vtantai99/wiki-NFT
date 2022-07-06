import { createSelector } from "reselect"
import { initialState } from "./reducer"

const selectWikiCollect = (state) => state.wikiCollect || initialState

const makeSelectWikiCollect = () => (
    createSelector(selectWikiCollect, (state) => state)
)

export { selectWikiCollect, makeSelectWikiCollect }