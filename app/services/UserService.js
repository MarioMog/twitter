const User = require('./../models/User')

class UserService {
  static create(id, username, name) {
    return new User(id, username, name, 'Sin bio')
  }
  static updateUserUsername(user, username) {
    user.setUsername(username)
  }
  static getInfo(user) {
    return [user.id, user.username, user.name, user.bio]
  }
  static getAllUsernames(user) {
    return user.reduce((acc, next) => {
      acc.push(next.username)
      return acc
    }, [])
  }
}

module.exports = UserService
