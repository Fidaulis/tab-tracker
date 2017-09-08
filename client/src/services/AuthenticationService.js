import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
//   email: 'josh.pantarotto@crossfit.com',
//   password: '123456'
// })
