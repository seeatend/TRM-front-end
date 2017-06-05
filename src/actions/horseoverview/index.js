/**
 * @module post
 */
import { get, post } from 'api/Request'

/**
 *  @module MESSAGE
 */
import { MESSAGE } from 'api/ServiceTypes'

/**
 *  FETCH_HORSE_INFO
 *  @type {String}
 */
export const FETCH_HORSE_INFO = 'FETCH_HORSE_INFO'

/**
 *  RECEIVED_HORSE_INFO
 *  @type {String}
 */
export const RECEIVED_HORSE_INFO = 'RECEIVED_HORSE_INFO'

/**
 *  FAILED_TO_FETCH_HORSE_INFO
 *  @type {String}
 */
export const FAILED_TO_FETCH_HORSE_INFO = 'FAILED_TO_FETCH_HORSE_INFO'

/**
 *  POSTING_HORSE_UPDATE
 *  @type {String}
 */
export const POSTING_HORSE_UPDATE = 'POSTING_HORSE_UPDATE'

/**
 *  POSTED_HORSE_UPDATE
 *  @type {String}
 */
export const POSTED_HORSE_UPDATE = 'POSTED_HORSE_UPDATE'

/**
 *  FAILED_TO_POST_HORSE_UPDATE
 *  @type {String}
 */
export const FAILED_TO_POST_HORSE_UPDATE = 'FAILED_TO_POST_HORSE_UPDATE'

/**
 *  UPDATE_HORSE_TEXT
 *  @type {String}
 */
export const UPDATE_HORSE_TEXT = 'UPDATE_HORSE_TEXT'

/**
 *  ADD_HORSE_MEDIA_FILES
 *  @type {String}
 */
export const ADD_HORSE_MEDIA_FILES = 'ADD_MEDIA_FILES'

/**
 *  CLEAR_HORSE_SUBMIT_DATA
 *  @type {String}
 */
export const CLEAR_HORSE_SUBMIT_DATA = 'CLEAR_HORSE_SUBMIT_DATA'

/**
 *  gettingHorseInfo
 *  @return {Object}
 */
export const gettingHorseInfo = () => ({
  type: FETCH_HORSE_INFO
})

/**
 *  receivedHorseInfo
 *  @return {Object}
 */
export const receivedHorseInfo = data => ({
  type: RECEIVED_HORSE_INFO,
  data
})

/**
 *  failedToGetHorseInfo
 *  @return {Object}
 */
export const failedToGetHorseInfo = () => ({
  type: FAILED_TO_FETCH_HORSE_INFO
})

/**
 *  postingHorseUpdate
 *  @return {Object}
 */
export const postingHorseUpdate = () => ({
  type: POSTING_HORSE_UPDATE
})

/**
 *  postedHorseUpdate
 *  @return {Object}
 */
export const postedHorseUpdate = () => ({
  type: POSTED_HORSE_UPDATE
})

/**
 *  failedToPostHorseUpdate
 *  @return {Object}
 */
export const failedToPostHorseUpdate = () => ({
  type: FAILED_TO_POST_HORSE_UPDATE
})

/**
 *  updateHorseText
 *  @param  {String} text
 *  @return {Object}
 */
export const updateHorseText = text => ({
  type: UPDATE_HORSE_TEXT,
  text
})

/**
 *  addHorseMediaFiles
 *  @param  {Object} files
 *  @return {Object}
 */
export const addHorseMediaFiles = files => ({
  type: ADD_HORSE_MEDIA_FILES,
  files
})

/**
 *  clearHorseSubmitData
 *  @return {Object}
 */
export const clearHorseSubmitData = () => ({
  type: CLEAR_HORSE_SUBMIT_DATA
})

/**
 *  fetchHorseInfo [async]
 *  @param {Object} data
 *  @return {Promise}
 */
export const fetchHorseInfo = data => {
  return (dispatch, getState) => {
    // Signal to the store a fetch is going to happen
    dispatch(gettingHorseInfo())

    return get({
      url: MESSAGE,
      data
    })
    .then(response => {
      dispatch(receivedHorseInfo(response))
      console.log(response)
      return Promise.resolve()
    })
    .catch(error => {
      dispatch(failedToGetHorseInfo())
      console.log(error)
      return Promise.reject(error)
    })
  }
}

/**
 *  submitHorseUpdate [async]
 *  @param {Object} data
 *  @return {Promise}
 */
export const submitHorseUpdate = data => {
  return (dispatch, getState) => {
    // Dispatch an action for starting the posting.
    dispatch(postingHorseUpdate())

    return post({
      url: MESSAGE,
      data
    })
    .then(response => {
      dispatch(postedHorseUpdate(response))
      return Promise.resolve()
    })
    .catch(error => {
      dispatch(failedToPostHorseUpdate(error))
      return Promise.reject(error)
    })
  }
}
