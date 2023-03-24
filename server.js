const express = require('express');
const app = express();
const PORT = 4000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res)=>{
    res.send("working")
})

app.listen(PORT, () => {
    console.log(`🏝️ Server is listening to PORT ${PORT} 🎧`)
})