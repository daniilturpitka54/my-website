const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
app.get('/education', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'education.html'));
})

app.get('/projects', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'projects.html'));
})

app.get('/contact', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
})

app.post('/send-email', (req,res)=>{
    const { visitorEmail, message } = req.body;
})
const port = 8000
app.listen(port, ()=>{
    console.log("server listening")
})
