import express from "express";
import routes from "./routes/index.js";

const port = 3000;
const app = express();

routes(app);

app.listen(port, () => console.log(`Ouvindo a porta ${port}`));