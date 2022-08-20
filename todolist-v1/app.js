const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { request } = require('express');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("public"));

let items = ["Buy food"];
let workItems = []

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

app.set('view engine', 'ejs');

var today = new Date();

var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
}
var day = today.toLocaleDateString('en-US', options);

app.get("/", (req, res) => {
    res.render('list', { listTitle: day, newListItems:items });
});

app.post('/', (req, res) => {
    let item = req.body.newItem;
    if(req.body.list ==="Work"){
        workItems.push(item);
        res.redirect('/work');
    }else{
        items.push(item);
        res.redirect('/')
    }
});

app.post('/',(req,res)=>{
});

//Work
app.get('/work',(req,res)=>{
    res.render('list',{listTitle:"Work",newListItems:workItems});
});

app.post('work',()=>{
    let items = req.body.newItem;
    res.redirect('/work');
});