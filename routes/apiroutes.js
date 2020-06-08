var db = require("../db/db");
var fs = require("fs");
console.log(db);

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
        db = db.filter((item) => {
          return item.id !==parseInt(deleteNote);
        });

        console.log(db);
        res.json(db);
      //db.splice(deleteNote, 1);
       
       
       
    });

  
      };