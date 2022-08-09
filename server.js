const http = require('http')
const express = require('express')
const { sendProducts } = require('./sendProducts2')
const { createUser } = require('./user') //createUser = 'user'

const app = express()
app.use(express.json())
//get: 데이터를 가져온다
app.get('/ping', (req, res) => {
  res.json({ message: '/ pong' })
})
//post: 데이터를 받아서(회원가입,로그인..) 저장함
app.post('/signup', createUser) //createUser를 받아옴
app.post('/login', (req, res) => {res.json('login success')}) // 각각의 요청에 대해 핸들링 하는 함수를 두번째 인자로 넣습니다.
app.get('/products', sendProducts)

const server = http.createServer(app)

server.listen(8000, () => {
  console.log('server is listening on PORT 8000')
})