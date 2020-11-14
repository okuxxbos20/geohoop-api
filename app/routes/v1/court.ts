import express from 'express'
const router: express.Router = express.Router()

// GET  http://localhost:5001/api/v1/court/
router.get('/', (req: express.Request, res: express.Response) => {
    res.json({
        message: "This is court api"
    })
})

module.exports = router