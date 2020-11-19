import express, { Router, Request as Req, Response as Res } from 'express'
import helmet from 'helmet'
import cors from 'cors'
const app = express()
app.use(helmet())
app.use(cors())
const router: Router = express.Router()

router.use('/court', require('./court.ts'))
router.use('/user', require('./user.ts'))

// いずれのルーティングにもマッチしない場合
app.use((req: Req, res: Res) => {
  res.status(404)
  res.render('error', {
    param: {
      status: 404,
      message: 'not found'
    }
  })
})

module.exports = router