'use strict'
const store = require('../store')
const config = require('../config.js')

const add = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiOrigin + '/photos',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// const destroy = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/photos/' + data,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const show = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/photos/' + data,
    method: 'GET'
  })
}

const update = function (data, id) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + '/photos/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const index = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/photos',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  add,
  // destroy,
  show,
  update,
  index
}
