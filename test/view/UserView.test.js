const UserView = require('./../../app/view/UserView')

describe('Test for UserView', () => {
  test('1) Return an error object when try to create a new user with a null payload', () => {
    const payload = null
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/payload no existe/)
  })
  test('2) Return an error object when try to create a new user with a payload with invalid propeties', () => {
    const payload = { id: '1', username: 1, name: 'a' }
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/necesitan tener un valor válido/)
  })
  test('3) Return an error object when try to create a new user with a payload with missing propeties', () => {
    const payload = { username: 'a' }
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/necesitan tener un valor válido/)
  })
  test('4) Create a user by a given valid payload', () => {
    const payload = { id: 1, username: 'username', name: 'name' }
    const result = UserView.createUser(payload)
    expect(result.id).toBe(1)
    expect(result.name).toBe('name')
    expect(result.username).toBe('username')
  })
})
