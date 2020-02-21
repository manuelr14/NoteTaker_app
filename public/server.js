var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const notes=[ ];
app.get("/", (req, res) => {
    res.send( {message: 'hello'})

});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "notes.html"));

});

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/notes", (req, res) => {
    res.json(notes);
});

app.post("/api/notes",(req,res)=>{
    console.log("recieved note");
    console.log(req.body);
    let newNote = req.body;
    
    saveNote(newNote);
    
    res.end("note created");
    

});

// module.exports= start

// const start = () => {

    app.listen(PORT, () => {
        console.log(`Listening on port:${PORT}`);
    });

// }