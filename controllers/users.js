let users = require('../data/users.json')

function userAuth(ctx) {
  const { userId, password } = ctx.request.body;

  const userAuthenticated = users.filter(user => {
    return user.userId === userId && user.password === password
  })
  if (userAuthenticated && userAuthenticated.length > 0) ctx.ok(true)
  else ctx.ok(false);
}

module.exports = {
  userAuth,
}
