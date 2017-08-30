'use strict'
const albumTemplate = require('../templates/album.hbs')
// const albumsTemplate = require('../templates/albums.hbs')

const onAddSuccess = function (data) {
  $('#createAlbumModal').modal('hide')
  $('#content').append(albumTemplate(data.album))
  $('#successNotify').css('display', 'block').text('Your album is created.')
  $('#errorNotify').css('display', 'none')
}
const onAddError = function (error) {
  console.log(error)
  $('#createAlbumModal').modal('hide')
  $('#content').empty()
  $('#errorNotify').css('display', 'block').text('There was a problem creating your album.')
  $('#successNotify').css('display', 'none')
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
