const cool = require('cool-ascii-faces');
const express = require("express");
const path = require('path');
const app = express();
const statFilesPath = path.join(__dirname, "../public");
app.use(express.static(statFilesPath));
app.use(express.static(path.join(statFilesPath, "/path finder")));
app.use(express.static(path.join(statFilesPath, "/sorting visualiser")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})
app.get('/pathfinder', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/path finder/index.html"))
})
app.get('/sortingvisualiser', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/sorting visualiser/index.html"));
})
app.get('/cool', (req, res) => res.send(cool()))
app.listen(process.env.PORT || 5000, () => {
    console.log("listening on port 3000");
});
