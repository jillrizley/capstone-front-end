'use strict'

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

const addAlbumSuccess = (data) => {
  console.log('addAlbumSuccess data = ', data)
}

module.export = {
  success,
  failure,
  addAlbumSuccess
}
