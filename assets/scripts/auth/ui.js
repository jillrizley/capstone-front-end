const store = require('../store')
const albumEvents = require('../albums/events')

const failure = (response) => {
}

const signUpSuccess = (response) => {
  $('#-signup-modal-form')[0].reset()
}

const signUpError = (response) => {
  $('#sign-up-error').removeClass('hidden')
  setTimeout(() => {
    $('#sign-up-error').addClass('hidden')
  }, 1500)
}

const signInSuccess = (response) => {
  store.user = response.user
  $('#-signup-modal').modal('hide')
  $('#-signup-button').addClass('hidden')
  $('#-logout-button').removeClass('hidden')
  $('#-changepwd-button').removeClass('hidden')
  $('#signedin-header').removeClass('hidden')
  $('#createAlbumBtn').removeClass('hidden')
  $('.needsSignInSuccess').show()
  $('#content').show()
  albumEvents.showAlbums()
  $('#-signin-modal-form')[0].reset()
}

const signInError = (response) => {
  $('#sign-in-error').removeClass('hidden')
  setTimeout(() => {
    $('#sign-in-error').addClass('hidden')
  }, 1500)
}

const signOutSuccess = (response) => {
  store.user = undefined
  $('#-signup-button').removeClass('hidden')
  $('#-logout-button').addClass('hidden')
  $('#-changepwd-button').addClass('hidden')
  $('#signedin-header').addClass('hidden')
  $('#needsSignInSuccess').hide()
  $('#content').hide()
  // forceSignIn()
}

const signOutError = (response) => {
}

const changePasswordSuccess = (response) => {
  $('#-changepwd-modal').modal('hide')
}

const changePasswordError = (response) => {
  $('#changepwd-error').removeClass('hidden')
  setTimeout(() => {
    $('#changepwd-error').addClass('hidden')
  }, 1500)
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  signOutSuccess,
  signOutError,
  changePasswordSuccess,
  changePasswordError,
  failure
}
