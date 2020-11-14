import express from 'express'
import { Error } from 'mongoose'

const router: express.Router = express.Router()
const UserModel = require('../../models/userModel.ts')

// GET  http://localhost:5001/api/v1/user/
router.get('/', (req: express.Request, res: express.Response) => {
    res.json({
        message: "This is user api"
    })
})

router.post('/', (req: express.Request, res: express.Response) => {
  const User = new UserModel()

  // データを詰め込む
  User.name = req.body.name
  User.email = req.body.email
  User.bio = req.body.bio

  // 保存処理
  User.save((err: Error) => {
    if (err){
      res.send(err)
    } else {
      res.json({ message: 'Success!!' })
    }
  })
})

module.exports = router