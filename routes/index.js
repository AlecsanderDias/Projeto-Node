import express from "express";

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({titulo:"Teste do Esxpress!"});
    });

    app.use(express.json())
}

export default routes;