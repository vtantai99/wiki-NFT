import { createSelector } from "reselect"
import { initialState } from "./reducer"

const selectDrillDown = (state) => state.drillDown || initialState

const makeSelectDrillDown = () => (
    createSelector(selectDrillDown, (state) => state)
)

export { selectDrillDown, makeSelectDrillDown }