import express from 'express'
const router: express.Router = express.Router()

// GET  http://localhost:5001/api/v1/court/test
router.get('/', (req:express.Request, res:express.Response) => {
    res.json({
        message: "This is court api"
    })
})

//routerをモジュールとして扱う準備
module.exports = router