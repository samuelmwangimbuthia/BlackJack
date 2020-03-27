import express from 'express';
import path from 'path';
import open from'open'; //ref to open a site in the browser

const port = 3000;//variable stores the port to be used
const app = express(); //To create an instance of express

// Tell express which route it should handle
app.get('/',(req, res)=>{
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

//Tell Express to listen on the port we defined above
app.listen(port,()=> {open('http://localhost:' + port);});
