var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const notes=[ ];

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "notes.html"));

});

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/notes", (req, res) => {
    res.json(notes);
})