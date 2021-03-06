import express from 'express';
import { Controller } from './data.types';
import errorHandler from './middleware/error.middleware';
import cors from 'cors';

class App {
  public app: express.Application;
  public port: number | string;
 
  constructor(controllers: Controller[], port: number | string) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }
 
  private initializeMiddlewares(): void{
    this.app.use(express.json());
    this.app.use(cors({origin: "*"}))
    this.app.use(express.urlencoded({extended: false}));
  }
 
  private initializeErrorHandling(): void {
      this.app.use(errorHandler);
  }

  private initializeControllers(controllers: Controller[]): void{
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
 
  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;