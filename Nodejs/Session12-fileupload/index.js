//Main file from where my project starts its execution
const express = require('express');
const cors = require('cors');//helping you to connect frontend with backend
require('dotenv').config();
require('./config'); //included DB Connection
const app = express();
app.use(express.json()); //parse data to json
app.use('/uploads', express.static('uploads')) //to access images in frontend
app.use(cors());//allow third party to access my APIS
app.get('/', (req, res) => res.send('User Management System is Running.'))
app.use('/api/user', require('./routes/user.route'));
app.use('/api/product', require('./routes/product.route'));
app.listen(process.env.PORT, () => {
    console.log(`Server listining to PORT ${process.env.PORT}`);
})