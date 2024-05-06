const express = require('express');
const bodyParser = require('body-parser');
const connectDB=require("./config/database");
const animalRoutes=require("./routes/Animal")

const app = express();


app.use(bodyParser.json());
connectDB();



app.use("/animalworld",animalRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/",(req,res)=>{
    res.send("<h1>Hello Avinash Gupta250</h1>")
  })