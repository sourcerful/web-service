import express from "express";
import postRoutes from './routes/posts'
import App from "./app";
import ActivatorController from "./controllers/activator.controller";

//http:/localhost:3001/
const PORT = process.env.PORT || 3001;
const app = new App([new ActivatorController,], PORT)

app.listen()

/*
connection to DB from React and C++ server
Whitelist - which IP is allowed 
Session rules - file extentions: .zip, .exe...
                max file size: 100MB
Filename: size?
maybe ID
*/