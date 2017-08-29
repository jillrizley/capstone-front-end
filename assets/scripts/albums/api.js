'use strict'
const store = require('../store')
const config = require('../config.js')

const add = function (data) {
  console.log('hello')
  return $.ajax({
    method: 'POST',
    url: config.apiOrigin + '/albums',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const destroy = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/albums/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const show = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/albums/' + data,
    method: 'GET'
  })
}

const update = function (data, id) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + '/albums/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/albums',
    method: 'GET'
  })
}

module.exports = {
  add,
  destroy,
  show,
  update,
  index
}
