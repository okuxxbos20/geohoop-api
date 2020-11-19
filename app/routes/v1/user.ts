import express, { Router, Request as Req, Response as Res } from 'express'
import { Error } from 'mongoose'

const router: Router = express.Router()
const UserModel = require('../../models/userModel.ts')

// GET ALL USER
router.get('/', async(req: Req, res: Res) => {
  try {
    UserModel.find().then((users: any) => res.json(users))
  } catch (err) {
    res.status(500).send(err)　　　　　
  }
})

// GET A USER
router.get('/:id', (req: Req, res: Res) => {
  const uid = req.params.id
  UserModel.findById(uid).then((user: any) => {
    if (!user) {
      return res.status(404).send()
    }
    res.send(user)
  }).catch((e: Error) => {
    res.status(500).send()
  })
})

// CREATE ONE USER
router.post('/', (req: Req, res: Res) => {
  const User = new UserModel()

  User.name = req.body.name
  User.email = req.body.email
  User.bio = req.body.bio

  User.save((err: Error) => {
    if (err){
      res.send(err)
    } else {
      res.json({ message: 'Success!!' })
    }
  })
})

// UPDATE ONE USER
router.patch('/:id', async(req: Req, res: Res) => {
  const User = new UserModel()
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'bio']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  const uid = req.params.id

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' })
  }

  try {
    const user = await User.findByIdAndUpdate(
      uid,
      req.body,
      { new: true, runValidators: true }
    )

    if (!user) {
      return res.status(404).send()
    }
    res.send(user)
  } catch (err) {
    res.status(500).send(err)
  }

  // UserModel.findByIdAndUpdate(uid).then((err: Error, user: any) => {
  //   if (err) {
  //     res.send(err)
  //   } else {
  //     user.name = req.body.name
  //     user.email = req.body.email
  //     user.bio = req.body.bio
  //     user.save((err: Error) => {
  //       if (err){
  //         res.send(err)
  //       } else {
  //         res.json({ message: 'Success To Update!' })
  //       }
  //     })
  //   }
  // })
})

module.exports = router