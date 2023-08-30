import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    let today = new Date();
    let dayVal = today.getDate();

    res.render("index.ejs", {
        dayType: "a weekday", 
        advice: "workin' hard"
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});