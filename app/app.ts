import express from 'express'

const app: express.Express = express()

// CORSの許可
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// body-parserに基づいた着信リクエストの解析
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// GetとPostのルーティング
var router = require('./routes/v1/')
app.use('/api/v1/', router)

// 5001番ポートでAPIサーバ起動
app.listen(5001, () =>{
  console.log('Example app listening on port 5001!')
})