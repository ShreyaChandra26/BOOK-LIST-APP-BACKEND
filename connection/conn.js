const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config()
mongoose.set("strictQuery",false)
const DB_URL=process.env.DB_URL

async function getConn(){
    await mongoose.connect(DB_URL).then(()=>{
        console.log("Succesfully connected to db")
    }).catch(e=>{console.log("Not connected to db")})
}

module.exports=getConn;