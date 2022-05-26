import * as express from 'express';
import { reqBodyDTO } from '../data.types';
import { ActivateService } from '../services/requests.func'
import app from "../app";
import multer from 'multer';
 
class ActivatorController {
  public path = '/activator';
  public router = express.Router();
  public storage: multer.StorageEngine;
 
  private posts: reqBodyDTO[] = []
  
  constructor() {
    this.intializeRoutes();
    this.storage = multer.diskStorage({
      destination: (req: express.Request, file: Express.Multer.File, callback) => {
        callback(null, "../files")
      },
      filename: (req: express.Request, file: Express.Multer.File, callback) => {
        callback(null, file.originalname)
      }
    })

    var upload = multer({ storage: this.storage }).array("files", 2)
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
  }
 
  public getAllPosts = (request: express.Request, response: express.Response) => {
    response.send(this.posts);
  }
 
  public createAPost = (request: express.Request, response: express.Response, next: express.NextFunction) => { 
    
    //maybe check if length of body is 1, if it is, its the activator message, if its higher, then its the data.
    if(Object.keys(request.body).length === 0){
        throw new Error();
    }
    const postBody: reqBodyDTO = request.body;
//  this.posts.push(postBody);
    console.log(postBody)
    console.log(this.posts)
    
    if(ActivateService(postBody.activator)){
      console.log(`Service activation: ${postBody.activator}`)
      response.json(postBody);
    }
    else{
      console.log("ERR: service didn't activate.")
      throw new Error("Service didn't work")
    }
  }
}
 
export default ActivatorController;