const {spawn} = require('child_process');
const express = require('express');
const router = express.Router();

const PythonShell = require('python-shell');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

//먼저 undefined로 선언이 됨. 그 뒤 파일 이름을 받게 되는 것
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'C:/Study/Python/1')
    },
    filename: function(req, file, cb) {
        cb(null, req.body.name+'.jpg')
    }
})

const upload = multer({storage: storage})

router.get('/', function(req, res, next){

    let dataToSend;
    const python = spawn('python3', ['python/python.py']);
    python.stdout.on('data', (data) =>{
        dataToSend = data.toString();
        console.log(data.toString())
    })

    python.on('close', (code)=>{
        res.send(dataToSend)
    })
})

// router.get('/t1', function(req, res, next){

//     //var result = 'None'
//     const options = {
//         mode:'text',
//         pythonPath:'',
//         pythonOptions: ['-u'],
//         scriptPath:'',
//         args: ['test1', 'Test2', 'Test3']
//     };

//     PythonShell.PythonShell.run("python/digit.py", options, function(err, results){
//         if(err) throw err

//         //console.log('pyShell test')
//         console.log('results: %j', results);
        
//         //result = results
//         res.send(results)
//     });

// })

router.post('/imgUpload', upload.single('file'), function(req, res){
    const options = {
        mode: 'text',
        pythonPath: '',
        pythonOption: ['-u'],
        scripPath: '',
        args: [req.file.filename]
    }

    console.log(req.file.filename)
    console.log(req.body.name)
    
    PythonShell.PythonShell.run("python/digit.py", options, function(err, results){
        if(err) throw err

        //console.log('pyShell test')
        console.log('results: %j', results);
        
        //result = results
        res.status(200).send({
            message: "OK",
            fileInfo: req.file.path,
            results: results
        })

        //res.send(results)
    });

    
})

module.exports = router;