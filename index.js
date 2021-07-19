const express = require('express');
const app = express();

//Import products into our app.
const productRoute = require('./routes/Products.js')
const userRoute = require('./routes/User.js')

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//page for the app
app.get('/', (req, res) =>{
    res.status(300).send('The app is working')
})


//Create a product route
app.use('/products', productRoute);

// User route
app.use('/user', userRoute);


app.listen(PORT, ()=>{
    console.log(`Server running on http://127.0.0.1:${PORT}`)
})












