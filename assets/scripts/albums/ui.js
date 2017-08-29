'use strict'

const onAddSuccess = function (data) {
  $('#createAlbumModal').modal('hide')
  $('#content').empty()
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

module.exports = {
  onAddSuccess,
  onAddError
}
