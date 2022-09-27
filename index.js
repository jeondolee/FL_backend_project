//이 index는 딱 깔끔하게 선언 정도만...
//구체적인 api 선언 등 동작은 router에서 하자

const express = require('express');
const app = express();

app.use(express.json({
  limit:"50mb",
}));

app.use(express.urlencoded({
  limit:"50mb",
  extended: false
}));

const port = 3010
const db = require("./models"); //require - JS 파일을 읽고 실행하고 내보내는 객체를 반환하는 방식
                                //index.js를 가져옴 내부 index로 인해 연결된 폴더 안의 모든 모델을 사용하겠다는 의미

const cors = require('cors');
let corsOption = {
  origin: 'http://localhost:8080',
  Credentials: true
}
app.use(cors(corsOption))

                                const getTest1 = require("./router/getTest1.js")
const postTest1 = require("./router/postTest1.js")
const PostgreDataTest1 = require('./router/PostgreDataTest.js')
const visual = require("./router/visual.js")
const pythonGet = require("./router/pythonGet")
const board = require("./router/board")

app.use('/api/getTest1', getTest1)
app.use('/api/postTest1', postTest1)
app.use('/api/PostgreDataTest', PostgreDataTest1)
app.use('/api/visual', visual)
app.use('/api/pythonGet', pythonGet)
app.use('/api/board', board)

app.get('/test', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


db.sequelize.sync();