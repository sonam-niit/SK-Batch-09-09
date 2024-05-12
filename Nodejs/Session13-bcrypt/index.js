const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors');
require('dotenv').config();
const cookieparser= require('cookie-parser');

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('Connected'))
    .catch(err=>console.log('error occured',err));

const app= express();
app.use(express.json());
app.use(cors());
app.use(cookieparser());//parse cookie

app.use('/api/auth',require('./routes/auth.route'));
app.use('/api/user',require('./routes/user.route'));
app.use('/api/product',require('./routes/product.route'));

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to the PORT: ${process.env.PORT}`);
})