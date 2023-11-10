const express = require("express");
const addProductRoute = require("./routes/product")
const sequelize = require("./utils/database");
const bodyParser = require('body-parser');

const mainRoute = require("./routes/main");



const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use("/inventory",addProductRoute);
app.use("/", mainRoute);


sequelize.sync().then((result)=>{
    
    app.listen(3000);
}).catch(e=>{
    console.log(e);
})
