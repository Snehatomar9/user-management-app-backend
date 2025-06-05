const express=require("express")
const mongoose=require("mongoose")
const route=require("./routes/route")

const app=express()

app.use(express.json());  //midleware
app.use("/",route) //midleware

//Database connection
mongoose.connect("mongodb+srv://snehatomar92003:14434918w@cluster0.42hcgok.mongodb.net/userManagement")
    .then(() => console.log("Database connected succesfully"))
    .catch(() => console.log("Database not connected"));

    //server creation
app.get("/", (req, res) => {
    res.send("Hello express js");
})
//Update collection


let PORT=3000;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running at port ${PORT}`);
    }
})