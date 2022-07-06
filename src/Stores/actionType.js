/**
 * Appends REQUEST async action type
 */

export const REQUEST = (actionType) => `${actionType}_REQUEST`.toString()

/**
   * Appends SUCCESS async action type
   */

export const SUCCESS = (actionType) => `${actionType}_SUCCESS`

/**
   * Appends FAILURE async action type
   */

export const FAILURE = (actionType) => `${actionType}_FAILED`

export const CHANGE_SUCCESS = (name) => `Update ${name} successful`
