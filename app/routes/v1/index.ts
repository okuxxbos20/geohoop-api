import express from 'express'
const router: express.Router = express.Router()

router.use('/court', require('./court.ts'))
router.use('/user', require('./user.ts'))

module.exports = router