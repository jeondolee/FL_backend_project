const {spawn} = require('child_process');
const express = require('express');
const router = express.Router();

const PythonShell = require('python-shell');

router.get('/', function(req, res, next){

    let dataToSend;
    const python = spawn('python3', ['../python/python.py']);
    python.stdout.on('data', (data) =>{
        dataToSend = data.toString();
        console.log(data.toString())
    })

    python.on('close', (code)=>{
        res.send(dataToSend)
    })
})

router.get('/t1', function(req, res, next){
    const options = {
        mode:'text',
        pythonPath:'',
        pythonOptions: ['-u'],
        scriptPath:'',
        args: ['테스트1', 'Test2', 'Test3']
    };

    PythonShell.PythonShell.run("python/python.py", options, function(err, results){
        if(err) throw err;

        //console.log('pyShell test')
        console.log('results: %j', results);
    });
})

module.exports = router;