import express from 'express'
import path from 'path'
export const router=express.Router()
const options = {
    root: path.join("../expressroute/public/")
};
const start=Date.now()
router.use((req,res,next)=>{

     console.log('Time: ',Date.now()-start,req.url)
     next()
})
router.get("/",(req,res)=>{
   
 
res.sendFile('index.html',options,(err)=>{
  if(err) console.log(err)
  console.log("sent")
})
})
router.get("/about",(req,res)=>{
    res.sendFile('about.html',options,(err)=>{
        if(err) console.log(err)
        console.log("sent")
      })
})

router.get("/contact",(req,res)=>{
    res.sendFile('contact.html',options,(err)=>{
        if(err) console.log(err)
        console.log("sent")
      })
})

