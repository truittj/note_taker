var path =require("path");
 var db = require("../db/db");


 module.exports= function(app){
      app.get("/api/notes", function(req, res) {
        return res.json(db);
      });
      
      
      // Displays a single character, or returns false
      app.get("/api/:notes", function(req, res) {
     
      
        return res.json(false);
      });

      app.post("/api/notes", function(req, res) {
        var newNote = req.body;
        newNote.id=db.length;
      
        //console.log(newNote);
      
        // We then add the json the user sent to the character array
        db.push(newNote);
      
        // We then display the JSON t o the users
        res.json(db);
      });

      app.delete("/api/notes/:id", function(req, res) {
        var deleteNote = req.params.id;
        var newNote = req.body;

        // var note = deleteNote.filter(steve => {
        //    return steve.id == deleteNote.id;
        //  })[0];
         //var index = deleteNote.indexOf(note);
        //console.log(deleteNote);
        console.log(deleteNote);
        console.log(newNote);
        //console.log(index);
        //console.log(note);

        //deleteNote.splice(deleteNote);
        res.json(db);
    })


    };