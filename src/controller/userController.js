const controller = {};

controller.list = (req, res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM `new_schema`.`users`', (err, users)=>{
            if(err) res.json(err);
            res.send({users:users});
        })
    })
};

controller.save = (req,res)=>{
    console.log(req.body);
    res.send("works");
};

module.exports= controller;