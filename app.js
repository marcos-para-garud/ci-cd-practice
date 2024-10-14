// const express = require('express');

// const app = express()

// app.get('/' , (req , res)=>{
//     res.send("Hello world")
// })

// app.listen(3011, () => {
//     console.log('Server is running on port 3011');
//     });
    
// // export default app
// // app.js
// module.exports = app;


const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world");
});

// Export the app for testing
module.exports = app;

// Start the server only if this file is run directly
if (require.main === module) {
    const PORT = 3011;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

