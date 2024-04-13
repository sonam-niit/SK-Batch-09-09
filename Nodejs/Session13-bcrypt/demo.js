const bcrypt=require('bcrypt');

async function encrypt(password){
    const hashPassword= await bcrypt.hash(password,12);
    console.log(hashPassword);
    const match= await bcrypt.compare('Sonam@123',hashPassword);
    console.log(match);
}

const password="Sonam@123";
encrypt(password);