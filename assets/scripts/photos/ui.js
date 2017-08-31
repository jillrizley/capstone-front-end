'use strict'
const photoInputTemplate = require('../templates/photoInput.hbs')
const photoTemplate = require('../templates/photo.hbs')

const onGetSuccess = function (data) {
  $('#container').html('')
  const container = $(this).closest('[data-album-id]')
  data.photos.map((photo) => {
    console.log(photo)
    container.append(photoTemplate(photo))
  })
}

const onAddSuccess = function (data) {
  console.log('Photo added to album')
  $(this).remove()
}

const onAddError = function (error) {
  console.log(error)
  $('#createAlbumModal').modal('hide')
  $('#content').empty()
}

const onShowSuccess = function (data) {
  data.albums.map(function (album) {
    $('#content').append(photoInputTemplate(album))
  })
}

const addPhotoInput = function () {
  $('#well').html('')
  $(this).siblings('.photoUrls').append(photoInputTemplate)
}

const onDestroySuccess = function () {
  $(this).closest('div').remove()
}

module.exports = {
  onAddSuccess,
  onAddError,
  onShowSuccess,
  onDestroySuccess,
  addPhotoInput,
  onGetSuccess
}
