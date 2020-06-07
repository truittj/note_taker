var db = require("../db/db");
var fs = require("fs");


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
      
        // We then display the JSON to the users
        res.json(db);
      });

      app.get("/api/notes/id", function(req, res) {
      //return res.json(notes[req.params.id]);
      res.json(db);
      //console.log(db);

      });

      app.delete("/api/notes/:id", function(req, res) {
      var deleteNote = req.params.id;
      var note = req.body;
        //console.log(deleteNote);

        
        //var newArr = db.splice(deleteNote, 1);
        //console.log(newArr);
        //console.log(db);

        delete db[deleteNote];
        console.log(db);
        //console.log(d)
        //var idk = db.push(newArr);
        //console.log(idk);
        //console.log("Deleted note with id "+req.params.id);
       res.join(db);
    });

  
      };