'use strict'
const photoInputTemplate = require('../templates/photoInput.hbs')
const photoTemplate = require('../templates/photo.hbs')

const onGetSuccess = function (data) {
  const container = $(this).closest('[data-album-id]').find('.photoUrls')
  container.html('')
  data.photos.map((photo) => {
    container.append(photoTemplate(photo))
  })
}

const onAddSuccess = function (data) {
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
  const $photoInput = $(this).siblings('.newPhotoInput').html(photoInputTemplate)
  const offset = $photoInput.offset()
  $('html, body').animate({scrollTop: offset.top}, 'slow')
}

const onDestroySuccess = function () {
  $(this).closest('li').remove()
}

module.exports = {
  onAddSuccess,
  onAddError,
  onShowSuccess,
  onDestroySuccess,
  addPhotoInput,
  onGetSuccess
}
