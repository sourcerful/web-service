import * as express from 'express';
import { activatorBodyFormat } from '../data.types';
 
class ActivatorController {
  public path = '/activator';
  public router = express.Router();
 
  private posts: activatorBodyFormat[] = [
    {
      activator: false
    }
  ];
 
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
    const post: activatorBodyFormat = request.body;
    this.posts.push(post);
    console.log(post)
    response.json(post);
  }
}
 
export default ActivatorController;