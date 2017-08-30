'use strict'
const photoInputTemplate = require('../templates/photoInput.hbs')
const photoTemplate = require('../templates/photo.hbs')

const onGetSuccess = function (data) {
  let $container = $(this).closest('[data-album-id]')
  data.photos.map((photo) => {
    console.log(photo)
    $container.append(photoTemplate(photo))
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
  $('#errorNotify').css('display', 'block').text('There was a problem creating your album.')
  $('#successNotify').css('display', 'none')
}

// const onShowSuccess = function (data) {
//   $('#content').html('')
//   data.albums.map(function (album) {
//     $('#content').append(albumTemplate(album))
//   })
// }

const addPhotoInput = function () {
  console.log('Adding photo input')
  $(this).siblings('.photoUrls').append(photoInputTemplate)
}

const onDestroySuccess = function () {
  $(this).closest('div').remove()
}

module.exports = {
  onAddSuccess,
  onAddError,
  // onShowSuccess,
  onDestroySuccess,
  addPhotoInput,
  onGetSuccess
}
