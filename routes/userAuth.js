const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/users')

router.post('/', Ctrl.userAuth)

module.exports = router.routes()