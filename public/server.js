var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const notes=[ "love", "yes"];

var notes = require("./assets/js/index.js");

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
    // let newNote = req.body;
    // for (var i = 0 ; i < notes.length; i++){

        notes.push(req.body);
        res.json(true);
    // }
    // }else{
    //     console.log("complete");
    // }
    
});


app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    notes.length = 0;
    

    res.json({ ok: true });
  });
// };


// module.exports= start

// const start = () => {

    app.listen(PORT, () => {
        console.log(`Listening on port:${PORT}`);
    });

// }