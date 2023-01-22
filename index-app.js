const expres = require('express')
const app = expres();
const bp = require('body-parser')
app.use(bp.urlencoded({extended:true}));
app.use(expres.static('public'))
app.listen(process.env.PORT || 3000, function(){
    console.log('On it..')
})
app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html')
})
app.post('/download', function(req,res){
    res.sendFile(__dirname + '/download.html')
})
app.post('/premium', function(req, res){
    res.sendFile(__dirname + '/premium.html')
})
app.post("/lessons", function(req, res){
    res.sendFile(__dirname + '/lessons.html')
})
app.get('/lessons', function(req,res){
    res.sendFile(__dirname + '/lessons.html')
})