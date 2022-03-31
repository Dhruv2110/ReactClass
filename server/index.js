const express = require('express')
const app = express()
const cors =require('cors')

app.use(cors())
app.use(express.json())

app.get('/',(req,res) => {

    //LOGIC...MONGODB..DB
    res.json({msg:'Hello from NodeJS'})
})

app.get('/getdata', (req, res) => {

    //LOGIC...MONGODB..DB
    res.json([{ name: 'Ram', age: 23 }, { name: 'aman', age: 32 }])
})

app.post('/savedata',(req,res) => {
    console.log(req.body);
    res.json({msg:'Data saved'})
})



app.listen(8500,() => {
    console.log("Server Connected at 8500")
})