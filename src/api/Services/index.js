import { post, get, put, patch } from 'api/Request'

import * as SERVICE_TYPES from 'api/ServiceTypes'

export const searchForHorses = (data) => {
  return post({
    url: SERVICE_TYPES.SEARCH,
    data: JSON.stringify(data)
  })
}

export const getSearchAttributesForHorses = () => {
  return get({
    url: SERVICE_TYPES.SEARCH_ATTRIBUTES
  })
}

export const getMemberDashboard = (data) => {
  return get({
    url: SERVICE_TYPES.DASHBOARD,
    ...data
  })
}

export const getHorseInfo = (data) => {
  return get({
    url: SERVICE_TYPES.HORSE_SLUG,
    ...data
  })
}

export const getHorseStatisticsResultsInfo = (token, name) => {
  return get({
    url: SERVICE_TYPES.HORSE_STATISTICS_RESULTS,
    headers: {
      'Authorization': `JWT ${token}`
    },
    data: {
      horseName: name
    }
  })
}

export const getHorseStatisticsResultsDetailsInfo = (name) => {
  return post({
    url: SERVICE_TYPES.HORSE_STATISTICS_RESULTS_DETAILS,
    data: JSON.stringify({ horseName: name })
  })
}

export const getHorseStatisticsFutureDetailsInfo = (name) => {
  return post({
    url: SERVICE_TYPES.HORSE_STATISTICS_FUTURE_DETAILS,
    data: JSON.stringify({ horseName: name })
  })
}

export const updateHorseData = (data) => {
  return put({
    url: SERVICE_TYPES.HORSE_SLUG,
    ...data
  })
}

export const performHorseUpdate = (data) => {
  return post({
    url: SERVICE_TYPES.MESSAGE,
    ...data
  })
}

export const performRegistration = (data) => {
  return post({
    data: JSON.stringify(data),
    url: SERVICE_TYPES.REGISTRATION
  })
}

export const performLogin = (data) => {
  return post({
    url: SERVICE_TYPES.LOGIN,
    data: JSON.stringify(data)
  })
}

export const getSyndicateInfo = (data) => {
  return get({
    url: SERVICE_TYPES.SYNDICATE_SLUG,
    ...data
  })
}

export const updateSyndicateData = (data) => {
  return put({
    url: SERVICE_TYPES.SYNDICATE_SLUG,
    ...data
  })
}

export const confirmRegistration = (data) => {
  return get({
    url: SERVICE_TYPES.REGISTRATION_CONFIRMATION,
    data
  })
}

export const performRegisterExistingSyndicate = (data) => {
  // The API is not ready yet. This is a placeholder code.
  return Promise.resolve({
    token: 'abc123'
  })
}

export const getInitialAppData = (token) => {
  return get({
    url: SERVICE_TYPES.SETUP,
    headers: {
      'Authorization': `JWT ${token}`
    }
  })
}

export const getUpdateFeedComments = (data) => {
  return get({
    url: SERVICE_TYPES.COMMENT,
    ...data
  })
}

export const postFeedComment = (data) => {
  return post({
    url: SERVICE_TYPES.COMMENT,
    ...data
  })
}

export const updateUserInformation = (data) => {
  return put({
    url: SERVICE_TYPES.USER,
    ...data
  })
}

export const getNews = () => {
  return get({
    url: SERVICE_TYPES.NEWS
  })
}

export const getUploadedData = () => {
  return get({
    url: SERVICE_TYPES.UPLOADED
  })
}
