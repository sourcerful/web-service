import express from "express";
import postRoutes from './routes/posts'
import App from "./app";
import ActivatorController from "./controllers/activator.controller";

//http:/localhost:3001/
const PORT = process.env.PORT || 3001;
const app = new App([new ActivatorController,], PORT)

app.listen()
