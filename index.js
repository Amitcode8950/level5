import express from "express"
const PORT =5000
const app = express()

app.get("/health",(req,res)=>{
    return res.status(200).json({
        message :"All are good"
    })
})
app.get("/",(req,res)=>{
    return res.status(200).json({
        message :"Hello i am coming form backend"
    })
})
app.listen(PORT,()=>{
    console.log(`Server is runing on PORT ${PORT}`)
})