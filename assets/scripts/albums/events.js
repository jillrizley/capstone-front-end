'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const addAlbum = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  // console.log(data)
  api.add(data)
    .then(ui.onAddSuccess)
    .catch(ui.onAddError)
}

const addHandlers = () => {
  $('#createAlbumForm').on('submit', addAlbum)
}

module.exports = {
  addAlbum,
  addHandlers
}
