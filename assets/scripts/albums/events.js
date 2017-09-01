'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const addAlbum = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.add(data)
    .then(ui.onAddSuccess)
    .catch(ui.onAddError)
}

const showAlbums = function () {
  api.index()
    .then(ui.onShowSuccess)
}

const updateAlbum = function (e) {
  e.preventDefault()
  const data = getFormFields(e.target)
  api.update(data, data.album.id)
    .then((rtn) => {
      ui.onUpdateSuccess(data.album.id)
    })
}

const deleteAlbum = function () {
  const id = $(this).closest('div').data('album-id')
  api.destroy(id)
    .then(ui.onDestroySuccess.bind(this))
}

const addHandlers = () => {
  $('#createAlbumForm').on('submit', addAlbum)
  $('#editAlbumForm').on('submit', updateAlbum)
  $('#content').on('click', '.deleteAlbumBtn', deleteAlbum)
  $('#content').on('click', '.editAlbumBtn', function () {
    $('#editAlbumModal').modal()
    const albumId = $(this).closest('[data-album-id]').data('album-id')
    $('#updateAlbumId').val(albumId)
  })
}

module.exports = {
  addAlbum,
  addHandlers,
  showAlbums,
  deleteAlbum
}
