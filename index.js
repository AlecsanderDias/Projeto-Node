import express from "express";

const port = 3000;
const app = express();


app.get("/", (req,res) => {
    res.status(200).send("Salve!");
})

app.listen(port, () => console.log(`Ouvindo a porta ${port}`));