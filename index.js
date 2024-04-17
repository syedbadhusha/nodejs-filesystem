const express = require('express')
const fs = require("fs");
const path = require('path')
const app = express();
app.listen(3000);

app.get('/',(req,res)=>
{
    fs.readdir("C:\\MYDATA\\Cources\\GUVI MERN", (err,files) => {
        if (err) throw err;
        let txtFiles = files.filter((file)=>path.extname(file)=='.txt')
        res.json({"Text Files":txtFiles})
      });      
})

app.post('/create',(req,res)=>
{
    const date = new Date()
    const fileName = `${date.toDateString()} - ${date.toTimeString().split(' ')[0].split(':').join('')}`
    fs.writeFileSync(`C:\\MYDATA\\Cources\\GUVI MERN\\${fileName}.txt`,date.toString())
    res.send("file created successfully")
})