'use strict'

const config = require('../config')
const store = require('../store')


const addAlbum = () => {
  return $.ajax({
    url: config.apiOrigin + 'albums',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  addAlbum
}
