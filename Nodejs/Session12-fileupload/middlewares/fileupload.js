const multer= require('multer');

const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        const uniqueSuffix=Date.now();
        const fileExtention= file.originalname.split('.').pop();
        cb(null,file.fieldname+'-'+uniqueSuffix+'.'+fileExtention);
    }
})
const upload = multer({storage:storage,
limits:{
    fileSize:1024*1024*5 //allow 5 MB
} })

module.exports=upload