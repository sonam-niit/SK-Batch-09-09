const jwt = require('jsonwebtoken');

const isAdmin = (req, res, next) => {

    const id = req.id;
    const user = userModel.findOne({ _id: id });
    if (user.isAdmin) {
        req.id = decode.id;
        next();
    }else{
        res.send({message:"You don't have access to implement Admin Routes"})
    }

}


module.exports = isAdmin