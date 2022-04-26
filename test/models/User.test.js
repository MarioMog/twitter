const User = require('./../../app/models/User')

describe('Unit test for User class', () => {
  test('1) Create an User object', () => {
    const user = new User(1, 'carlogilmar', 'Carlo', 'Bio')
    expect(user.id).toBe(1)
    expect(user.username).toBe('carlogilmar')
    expect(user.name).toBe('Carlo')
    expect(user.bio).toBe('Bio')
    expect(user.dateCreated).toBeDefined()
    expect(user.lastUpdated).toBeDefined()
  })
  test('2) Testing getters', () => {
    const user = new User(1, 'carlogilmar', 'Carlo', 'Bio')
    expect(user.getUsername()).toBe('carlogilmar')
    expect(user.getBio()).toBe('Bio')
    expect(user.getDateCreated()).toBeDefined()
    expect(user.getLastUpdated()).toBeDefined()
  })
  test('3) Testing setters', () => {
    const user = new User(1, 'carlogilmar', 'Carlo', 'Bio')
    user.setUsername('Gilmar')
    expect(user.getUsername()).toBe('Gilmar')
    user.setBio('Bio2')
    expect(user.getBio()).toBe('Bio2')
  })
})
