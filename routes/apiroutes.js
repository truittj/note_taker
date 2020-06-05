var path =require("path");
 var db = require("../db/db");
module.exports= function(app){
      app.get("/api/notes", function(req, res) {
        return res.json(db);
      });
      
      
      // Displays a single character, or returns false
      app.get("/api/:notes", function(req, res) {
        // var chosen = req.params.notes;
      
        // console.log(chosen);
      
        // for (var i = 0; i < notes.length; i++) {
        //   if (chosen === notes[i].routeName) {
        //     return res.json(tables[i]);
        //   }
        // }
      
        return res.json(false);
      });

    //   app.get("/api/waitlist/:waitlist", function(req, res) {
    //     var chosen = req.params.waitlist;
      
    //     console.log(chosen);
      
    //     for (var i = 0; i < waitlist.length; i++) {
    //       if (chosen === waitlist[i].routeName) {
    //         return res.json(waitlist[i]);
    //       }
    //     }
      
    //     return res.json(false);
    //   });


      app.post("/api/notes", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newWait = req.body;
        newWait.id=db.length;
      
        console.log(newWait);
      
        // We then add the json the user sent to the character array
        db.push(newWait);
      
        // We then display the JSON t o the users
        res.json(db);
      });
};