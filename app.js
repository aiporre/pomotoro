const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

app.get("/", (req, res) => {
	res.sendFile("index.html", { root: path.join(__dirname, "public") });
})

app.listen(port, () => {
	console.log(`Now listening on port ${port}`); 
});

