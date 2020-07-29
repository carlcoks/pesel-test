export default {
  // return errors
  returnError (response) {
    const error = { response }
    let code, message
    if (error.response.response) {
      code = error.response.response.data.code
      message = error.response.response.data.message
    } else {
      code = 500
      message = 'Сервер не доступен. Попробуйте позже!'
    }
    return { type: 'error', code, text: message }
  }
}
