//DB Connections
const mongoose= require('mongoose');

mongoose.connect(process.env.MONGO_URI)
.then(resp=>console.log('Connected'))
.catch(err=>console.log('Error Occured',err))