//users data
const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "password",
  },
]

const createUser = (req, res) => {
//req.body.데이터
	const user = req.body.data // req(요청).body(바디안에).data(변경가능)를 가져옴
  console.log(user)

	users.push({ // user추가. 배열에 요소추가
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password
  })//사용자한테 받아올 내용

  console.log('after: ', users)

  res.json({ message: "USER_CREATED" })
  // express 덕분에 JSON.stringify 함수를 사용할 필요없이
  // response 객체의 json 메소드를 활용합니다.
  
}

module.exports = { createUser } // routing.js 에서 사용하기 위해 모듈로 내보냅니다.