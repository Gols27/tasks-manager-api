module.exports = (router) => {
  router.prefix('/v1')
  router.use('/tasks', require('./tasks'))
  router.use('/users', require('./userAuth'))
}
