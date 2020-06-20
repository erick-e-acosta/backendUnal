const controller = {};

controller.list = (req, res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM `new_schema`.`users`', (err, users)=>{
            if(err) res.json(err);
            res.send({users:users});
        })
    })
};

module.exports= controller;