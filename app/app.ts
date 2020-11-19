import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
const app: express.Express = express()
app.use(helmet())
app.use(cors())
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// CONNECT TO mongoDB
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(
  'mongodb://localhost:27017/geohooptest',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
mongoose.connection.on('error', (err: any) => {
  console.error(`MongoDB connection error: ${err}`)
  process.exit(-1)
})

// ARROW CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// body-parserに基づいた着信リクエストの解析
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ROUTING
const router = require('./routes/v1/')
app.use('/api/v1/', router)

// 5001番ポートでAPIサーバ起動
app.listen(5001, () =>{
  console.log('Example app listening on port 5001!')
})