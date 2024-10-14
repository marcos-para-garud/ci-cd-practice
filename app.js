const express = require('express');

const app = express()

app.get('/' , (req , res)=>{
    res.send("Hello world")
})

app.listen(3011, () => {
    console.log('Server is running on port 3011');
    });
    
// export default app
// app.js
module.exports = app;
