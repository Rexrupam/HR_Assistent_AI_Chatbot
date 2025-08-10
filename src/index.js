import { app } from "./app.js"
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { Employees } from "./model/employee.model.js"
import { employees, attachEmbeddings } from "./seed/employee.seed.js"

dotenv.config({
    path: './.env'
})


connectDB()
.then(async()=>{
    app.listen(process.env.port || 8000, ()=>{
        console.log(`Server is listening on port: ${process.env.port}`)
    })

    await Employees.deleteMany({})
    await attachEmbeddings()
    await Employees.insertMany(employees)
})
.catch((err)=>{
    console.log('MongoDB connection failed: ',err)
})