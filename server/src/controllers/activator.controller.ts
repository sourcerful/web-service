import * as express from 'express';
import { activatorBodyFormat } from '../data.types';
import { ActivateService } from '../services/requests.func'
 
class ActivatorController {
  public path = '/activator';
  public router = express.Router();
 
  private posts: activatorBodyFormat[] = []
  
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
  }
 
  getAllPosts = (request: express.Request, response: express.Response) => {
    response.send(this.posts);
  }
 
  createAPost = (request: express.Request, response: express.Response, next: express.NextFunction) => { 
    
    if(Object.keys(request.body).length === 0){
        throw new Error();
    }
    const postBody: activatorBodyFormat = request.body;
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