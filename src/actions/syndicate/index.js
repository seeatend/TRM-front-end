import { getSyndicateInfo, updateSyndicateData } from 'api/Services'

import { formatHorseData } from 'utils/horseutils'

import { CALL_ACTION_TYPE } from 'middleware/AuthenticatedRequest'

import { addToastSuccess, addToastError } from 'actions/toast'

import { UPDATED_SYNDICATE_DATA } from 'texts/successmessages'

export const FETCH_SYNDICATE_INFO = 'FETCH_SYNDICATE_INFO'
export const RECEIVED_SYNDICATE_INFO = 'RECEIVED_SYNDICATE_INFO'
export const FAILED_TO_FETCH_SYNDICATE_INFO = 'FAILED_TO_FETCH_SYNDICATE_INFO'
export const CLEAR_SYNDICATE_DATA = 'CLEAR_SYNDICATE_DATA'

export const gettingSyndicateInfo = () => ({
  type: FETCH_SYNDICATE_INFO
})

export const receivedSyndicateInfo = (data) => ({
  type: RECEIVED_SYNDICATE_INFO,
  payload: {
    data
  }
})

export const failedToGetSyndicateInfo = () => ({
  type: FAILED_TO_FETCH_SYNDICATE_INFO
})

export const clearSyndicateData = () => ({
  type: CLEAR_SYNDICATE_DATA
})

export const fetchSyndicateInfo = slug => {
  return (dispatch, getState) => {
    dispatch(gettingSyndicateInfo())

    return getSyndicateInfo({urlParams: {slug}})
      .then(formatHorseData)
      .then((data) => {
        dispatch(receivedSyndicateInfo(data))
        return Promise.resolve(data)
      })
      .catch((error) => {
        dispatch(failedToGetSyndicateInfo(error))
        return Promise.reject(error)
      })
  }
}

export const submitSyndicateData = (slug, payload) => {
  return (dispatch, getState) => {
    return dispatch({
      type: CALL_ACTION_TYPE,
      types: [gettingSyndicateInfo, receivedSyndicateInfo, failedToGetSyndicateInfo],
      endpoint: updateSyndicateData,
      payload,
      urlParams: {slug}
    })
      .then(() => {
        dispatch(addToastSuccess(UPDATED_SYNDICATE_DATA))
        dispatch(fetchSyndicateInfo({name: slug}))
        return Promise.resolve()
      })
      .catch((error) => {
        if (error && error.message) {
          dispatch(addToastError(error.message))
        }
      })
  }
}
