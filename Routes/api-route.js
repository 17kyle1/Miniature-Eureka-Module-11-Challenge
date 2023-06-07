const fs = require('fs');

var uniqid = require("uniqid");


module.exports = function (app) {
    //get route to retrieve notes
    app.get('/api/notes', (req, res) => {
        let data = fs.readFileSync("./db/db.json", "utf8" );
        res.json(JSON.parse(data));
    });
// adds and saves a note to the page
    app.post("/api/notes", (req, res) => {
        const postNote = {
            ...req.body,
            id: uniqid(),
        };
    

    
let data = fs.readFileSync("./db/db.json", "utf8");

const dataJSON = JSON.parse(data);

dataJSON.push(postNote);

fs.writeFile(
    "./db/db.json",
    JSON.stringify(dataJSON),
    (err) => {
        if (err) {
            console.error(err);
            return;
        }
        }
        )

    console.log("Note added")
    res.json(data);
});
}