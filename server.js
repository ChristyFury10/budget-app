const express = require('express');
const app = express();
const PORT = 4000;
const Budget = require("./models/budget.js")

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended:false }));

app.get("/", (req, res)=>{
    // res.send("working")
    res.render("index.ejs", {Budget})
})

app.get("/budget/:id", (req, res)=>{
    let item = Budget[req.params.id]
    res.render("show.ejs", {item})
})

app.listen(PORT, () => {
    console.log(`🏝️ Server is listening to PORT ${PORT} 🎧`)
})