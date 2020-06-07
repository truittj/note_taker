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
      
      
        // We then add the json the user sent to the character array
        db.push(newNote);
      
        // We then display the JSON to the users
        res.json(db);
      });


      app.delete("/api/notes/:id", function(req, res) {
      var deleteNote = req.params.id;      
        db.splice(deleteNote, 1);
       
       
        console.log("Deleted note with id "+ deleteNote);
       res.json(db);
    });

  
      };