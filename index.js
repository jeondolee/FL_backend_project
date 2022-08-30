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
                                //뭔진 모르겠는데 inde.js 가져오는 듯
const getTest1 = require("./router/getTest1.js")
const postTest1 = require("./router/postTest1.js")
const PostgreDataTest1 = require('./router/PostgreDataTest.js')
const pythonGet = require("./router/pythonGet.js")

app.use('/api/getTest1', getTest1)
app.use('/api/postTest1', postTest1)
app.use('/api/PostgreDataTest', PostgreDataTest1)
app.use('/api/pythonGet', pythonGet)

app.get('/test', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


db.sequelize.sync();