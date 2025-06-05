const express=require("express")
const Route=express.Router()

const{ addUser}=require("../controllers/userController");

Route.post("/addUser",addUser);

module.exports=Route;