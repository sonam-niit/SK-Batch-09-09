const bcrypt=require('bcrypt');
const jwt= require('jsonwebtoken');

async function encrypt(password){
    const hashPassword= await bcrypt.hash(password,12);
    console.log(hashPassword);
    const match= await bcrypt.compare('Sonam@123',hashPassword);
    console.log(match);
}
const password="Sonam@123";
encrypt(password);
const SECRET="hello123"
function createToken(payload){
    const token = jwt.sign(payload,SECRET);
    console.log(token);

    const data= jwt.verify(token,SECRET);
    console.log(data);
}

createToken({id:"Sonam123",name:"Sonam Soni",email:"sonam@gmail.com"});