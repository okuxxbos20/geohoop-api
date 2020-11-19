import express, { Router, Request as Req, Response as Res } from 'express'
const router: Router = express.Router()

// GET  http://localhost:5001/api/v1/court/
router.get('/', (req: Req, res: Res) => {
  res.json({
    message: "This is court api"
  })
})

module.exports = router