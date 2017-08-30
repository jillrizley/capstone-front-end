'use strict'
const photoInputTemplate = require('../templates/photoInput.hbs')
const photoTemplate = require('../templates/photo.hbs')

const onGetSuccess = function (data) {
  const $container = $(this).closest('[data-album-id]')
  data.photos.map((photo) => {
    console.log(photo)
    $container.append(photoTemplate(photo))
  })
}

const onAddSuccess = function (data) {
  $('#content').append(photoTemplate(data.photo))
  $(this).remove()
}

const onAddError = function (error) {
  console.log(error)
  $('#createPhotoModal').modal('hide')
  $('#content').empty()
}

const onShowSuccess = function (data) {
  data.photo.map(function (photo) {
    $('#content').append(photoTemplate(data.photo))
  })
}

const addPhotoInput = function () {
  console.log('Adding photo input')
  $(this).siblings('.photoUrls').append(photoInputTemplate)
}
//
// const onDestroySuccess = function () {
//   $(this).closest('div').remove()
// }

module.exports = {
  onAddSuccess,
  onAddError,
  // onDestroySuccess,
  addPhotoInput,
  onGetSuccess,
  onShowSuccess
}
