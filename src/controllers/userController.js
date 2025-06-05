const userModel=require("../models/userModels");

const addUser=async(req,res)=>{
    try{
        const userData=req.body;

        if(Object.keys(userData).length === 0){
            return res.status(400).json({msg:"Bad Request, No Data Provided"});
        }
        let user=await userModel.create(userData);
        return res.status(201).json({msg:"User Data Added Succesfully",user});
    }catch(error){
        return res.status(500).json({msg:"Internal server Error"})
    }
}

const userUpdate=async(req,res)=>{
    try{

    }catch(error){
        return res.status(500).json({msg:"Internal server Error"})
    }
}
module.exports={addUser};