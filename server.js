express = require("express");
app = express();
consyt = path = require('path')

app.use(express.urlencoded({extended : true}));

app.get('/set01',(req,res)=>{
    res.sendFile(path.join(__dirname , 'indax.html'))
})
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname,  'set02.html'));
});

app.post('/add',(req,res)=>{
    
    console.log(req.body)
    res.send('ok')
})


app.listen(3000, () => console.log('Started server on http://localhost:3000'));