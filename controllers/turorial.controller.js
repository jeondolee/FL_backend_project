const db = require("..");
const Tutorial = db.tutorials;
const Op = db.Sequlize.Op;

exports.create = (req, res) => {
    if(!req.body.title){
        res.status(400).send({
            message: "Content can not be empty",           
        });
    return;
    }

    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false,
    };
};