const UserService = require('./../services/UserService')

class UserView {
  static createUser(payload) {
    if (payload === null) return { error: 'payload no existe' }
    if (
      typeof payload.id !== 'number' ||
      typeof payload.username !== 'string' ||
      typeof payload.name !== 'string'
    )
      return { error: 'necesitan tener un valor válido' }

    return UserService.create(payload.id, payload.username, payload.name)
  }
  // static updateUserUsername(user, username) {
  //   user.setUsername(username)
  // }
  // static getInfo(user) {
  //   return [user.id, user.username, user.name, user.bio]
  // }
  // static getAllUsernames(user) {
  //   return user.reduce((acc, next) => {
  //     acc.push(next.username)
  //     return acc
  //   }, [])
  // }
}

module.exports = UserView
