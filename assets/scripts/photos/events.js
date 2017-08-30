'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const getPhotosByAlbum = function () {
  let albumId = $(this).closest('[data-album-id]').data('album-id')
  api.index({albumId: albumId})
    .then(ui.onGetSuccess.bind(this))
    .catch(ui.onAddError)
}
//
// const showAlbums = function () {
//   api.index()
//     .then(ui.onShowSuccess)
// }

// const deleteAlbum = function () {
//   const id = $(this).closest('div').data('album-id')
//   console.log( `Deleting ...${id}`)
//   api.destroy(id)
//     .then(ui.onDestroySuccess.bind(this))
// }

const addPhoto = function (e) {
  e.preventDefault()
  let data = getFormFields(e.target)
  data.photo.albumId = $(this).closest('[data-album-id]').data('album-id')
  api.add(data)
    .then(ui.onAddSuccess.bind(this))
    .catch(ui.onAddError)
}

const addHandlers = () => {
  $('#content').on('click', '.addPhotoInputBtn', ui.addPhotoInput)
  $('#content').on('click', '.viewAlbumBtn', getPhotosByAlbum)
  $('#content').on('submit', '.addPhotoForm', addPhoto)
}

module.exports = {
  getPhotosByAlbum,
  addPhoto,
  addHandlers
}
