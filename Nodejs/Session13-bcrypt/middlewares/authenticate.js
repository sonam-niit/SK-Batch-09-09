const jwt= require('jsonwebtoken');

const authenticate = (req, res, next) => {

    const token = req.cookies.token;
    console.log(token);
    if (!token) {
        return res.status(401).send({message:'Unauthorized access'})
    }
    const decode= jwt.verify(token,process.env.JWT_SECRET);
    if(!decode){
        return res.status(401).send({message:'Unauthorized access'})
    }
    req.id= decode.id;
    next();
}



// const authenticate = (req, res, next) => {

//     const tokenKey = req.headers.authorization;

//     if (!tokenKey) {
//         return res.status(401).send({message:'Unauthorized access'})
//     }
//     const token= tokenKey.split(' ')[1];
//     const decode= jwt.verify(token,process.env.JWT_SECRET);
//     if(!decode){
//         return res.status(401).send({message:'Unauthorized access'})
//     }
//     req.id= decode.id;
//     next();
// }

module.exports = authenticate