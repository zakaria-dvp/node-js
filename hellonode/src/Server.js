const express = require('express');
const app = express();
app.use(express.json())
app.get('/Home',(req,res)=>{
    // console.log('Someone is trying to access the server...')
    res.send('Hello world ')
})

app.listen(3000,()=>{
  console.log("Server has started on port 3000")
});
