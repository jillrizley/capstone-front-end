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

const onUpdateSuccess = function (albumId) {
  $('#editAlbumModal').modal('hide')
  const title = $('#editAlbumModal input[type=text]').val()
  $('#editAlbumModal input[type=text]').val('')
  const description = $('#editAlbumModal textarea').val()
  $('#editAlbumModal textarea').val('')
  $('[data-album-id=' + albumId + ']').find('h3').text(title)
  $('[data-album-id=' + albumId + ']').find('p').text(description)
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
