'use strict'
const albumTemplate = require('../templates/album.hbs')
// const albumsTemplate = require('../templates/albums.hbs')

const onAddSuccess = function (data) {
  $('#createAlbumModal').modal('hide')
  $('#content').append(albumTemplate(data.album))
  $('html, body').animate({scrollTop: $(document).height()}, 'slow')
  $('#createAlbumForm')[0].reset()
}

const onAddError = function (error) {
  console.log(error)
  $('#createAlbumModal').modal('hide')
  $('#content').empty()
}

const onShowSuccess = function (data) {
  $('#content').html('')
  data.albums.map(function (album) {
    $('#content').append(albumTemplate(album))
  })
}

const onUpdateSuccess = function (data) {
  $('#editAlbumModal').modal('hide')
  $('#content').append(albumTemplate(data.album))
  $('#editAlbumForm')[0].reset()
}

const onDestroySuccess = function () {
  $(this).closest('div').remove()
}

module.exports = {
  onAddSuccess,
  onAddError,
  onShowSuccess,
  onDestroySuccess,
  onUpdateSuccess
}
