const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/tasks')

router.get('/', Ctrl.tasksCtrl)
router.post('/', Ctrl.saveTasks)
router.put('/:id', Ctrl.toggleTask)

module.exports = router.routes()