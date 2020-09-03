
const LoginUser = 'loginuser'

const localStorageObj = {
  getLoginUser() {
    return JSON.parse(localStorage.getItem(LoginUser))
  },

  setLoginUser(user) {
    return localStorage.setItem(LoginUser, JSON.stringify(user))
  }
}
export { localStorageObj };


