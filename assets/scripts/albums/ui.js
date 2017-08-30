'use strict'
const albumsTemplate = require('../templates/albums.hbs')

const onAddSuccess = function (data) {
  console.log(data)
  $('#createAlbumModal').modal('hide')
  $('#content').html(albumsTemplate([data]))
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

const onShowSuccess = function(data) {
  $('#content').html(albumsTemplate(data))
}

module.exports = {
  onAddSuccess,
  onAddError,
  onShowSuccess
}
