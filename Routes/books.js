const express=require("express")
const requirelogin=require("../middlewares/requireLogin")
const router=express.Router()
const Books=require("../models/bookSchema")


//create book
router.post("/create-book",requirelogin,async(req,res)=>{
    try{
        const data=await Books.create(req.body)
        res.status(200).json({
            message:"posted successfully",
            data,
        })
    }catch{
        req.status(500).json({
            error:"server error",
            
        })
    }
})



//get book
router.get("/books",requirelogin,async(req,res)=>{
    try{
        const data=await Books.find()
        res.status(200).json({
            message:"successfully",
            data,
        });
    }catch{
        res.status(500).json({
            error:"server error",
        })
    }
})

//find book by id
router.get("/book/:id",async(req,res)=>{
    try{
        const data=await Books.findById({_id:req.params.id})
        return res.status(200).json({
            status:"success",
            data,
        })

    }catch(e){
        return res.status(422).json({
            status:"failure",
            error:e.error,
        })
    }
})


//update book by id
router.put("/update/:id",async (req,res)=>{
    try{
        const data=await Books.findByIdAndUpdate(
            {_id:req.params.id},
            req.body
        )
        const updateData=await Books.findOne({_id:req.params.id})
        res.status(200).json({
            message:"updated succesfully",
            updateData
        })
    }catch{
        res.status(500).json({
            error:"server error"
        })
    }
})

//delete book by id
router.delete("/delete/:id",requirelogin,async(req,res)=>{
    try{
        const data=await Books.findByIdAndDelete({_id:req.params.id})
        res.status(200).json({
            message:"deleted successfully"
        })
    }catch{
        res.status(500).json({
            error:"server error"
        })
    }

})

//all book delete
router.delete("/deleteAll",requirelogin,async(req,res)=>{
    try{
        const data=await Books.deleteMany()
        res.status(200).json({
            message:"deleted successfully",
        })
    }catch{
        res.status(500).json({
            error:"server error"
        })
    }

})

module.exports=router;
