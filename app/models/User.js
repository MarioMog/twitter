class User {
  constructor(id, username, name, bio) {
    this.id = id
    this.username = username
    this.name = name
    this.bio = bio
    this.dateCreated = new Date()
    this.lastUpdated = new Date()
  }
  setUsername(username) {
    this.username = username
  }
  setBio(bio) {
    this.bio = bio
  }
  getUsername() {
    return this.username
  }
  getBio() {
    return this.bio
  }
  getDateCreated() {
    return this.dateCreated
  }
  getLastUpdated() {
    return this.lastUpdated
  }
}

module.exports = User
