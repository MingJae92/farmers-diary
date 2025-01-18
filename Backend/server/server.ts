import express, { Request, Response } from 'express';

const app = express()
const PORT =7000

app.use(express.json())

// app.get("/", (res:Request, req:Response)=>{
//     res.send("Hello, world!")
// })

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
