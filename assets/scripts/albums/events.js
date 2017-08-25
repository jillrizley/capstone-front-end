'use strict'

const api = require('./api')
const ui = require('./ui')

const onAddAlbum = function () {
  console.log('hello')
  api.addAlbum()
    .done(ui.addAlbumSuccess)
    .fail(ui.failure)
}

module.exports = {
  onAddAlbum
}
