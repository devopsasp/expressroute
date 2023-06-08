import express from 'express'
import { router } from './route.js'
const app=express()
app.use('/itemapp',router)
app.listen(5050,()=>{
    console.log("app listening")
})