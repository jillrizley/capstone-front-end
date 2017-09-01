'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const getPhotosByAlbum = function () {
  const albumId = $(this).closest('[data-album-id]').data('album-id')
  api.index({albumId: albumId})
    .then(ui.onGetSuccess.bind(this))
    .catch(ui.onAddError)
}

const addPhoto = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  const $album = $(this).closest('[data-album-id]')
  data.photo.albumId = $album.data('album-id')
  api.add(data)
    .then(ui.onAddSuccess.bind(this))
    .then(() => {
      $album.find('.viewAlbumBtn').trigger('click')
    })
    .catch(ui.onAddError)
}

const deletePhoto = function () {
  const id = $(this).closest('li').data('photo-id')
  api.destroy(id)
    .then(ui.onDestroySuccess.bind(this))
}

const addHandlers = () => {
  $('#content').on('click', '.addPhotoInputBtn', ui.addPhotoInput)
  $('#content').on('click', '.viewAlbumBtn', getPhotosByAlbum)
  $('#content').on('submit', '.addPhotoForm', addPhoto)
  $('#content').on('click', '.deletePhotoBtn', deletePhoto)
}

module.exports = {
  getPhotosByAlbum,
  addPhoto,
  addHandlers,
  deletePhoto
}
