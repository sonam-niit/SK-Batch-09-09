const { connectDB } = require('./connectDB');
connectDB();
const CustModel= require('./models/customer');
const ProductModel= require('./models/product');

async function addProduct(name,price,description,category){
    try {
        const newProduct= new ProductModel({name,price,description,category});
        const resp=await newProduct.save();//store records in DB
        console.log(resp);
    } catch (error) {
        console.log('error occured',error)
    }
}
addProduct('Headphone',999,'loud sound','electronics');
async function deleteCustomer(id){
    try {
        const resp= await CustModel.findByIdAndDelete(id);
        if(resp){
            return console.log('Customer Deleted: ',resp);
        }
        return console.log('No customer found to delete');
    } catch (error) {
        console.log('error occured',error)
    }
}
async function updateCustomer(id,name,password){
    try {
        const resp= await CustModel.findByIdAndUpdate(id,{name,password})
        if(resp){
            return console.log('Customer Updated ',resp);
        }
        return console.log('Customer Not found to update');
    } catch (error) {
        console.log('error occured',error)
    }
}

async function getCustomerById(id){
    try {
        const resp= await CustModel.findById(id); 
        console.log(resp);
    } catch (error) {
        console.log('error occured',error)
    }
}
async function getCustomerByEmail(email){
    try {
        const resp= await CustModel.findOne({email}); 
        console.log(resp);
    } catch (error) {
        console.log('error occured',error)
    }
}
async function getAllCustomers(){
    try {
        //const resp= await CustModel.find(); //get all data with all fields
        const resp= await CustModel.find({},{_id:0,date:0,__v:0}); //get all with limited fields
        console.log(resp);
    } catch (error) {
        console.log('error occured',error)
    }
}
async function addCustomer(name,email,username,password){
    try {
        const newCustomer= new CustModel({name,email,username,password});
        const resp=await newCustomer.save();//store records in DB
        console.log(resp);
    } catch (error) {
        console.log('error occured',error)
    }
}
//addCustomer('bobby','bob@gmail.com','bob123','123456');
//getAllCustomers();
//getCustomerById('6609646f907e810d97f52bee');
//getCustomerByEmail('alex@gmail.com');
//updateCustomer('6609646f907e810d97f52bee','Bobby','bob@123');
//deleteCustomer('66096320981795af03ad6864');