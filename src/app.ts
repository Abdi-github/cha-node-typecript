import express, { Express } from 'express';
import { dbConnect } from './setupDatabase';
import { chaServer } from './setupServer';

class Application {
  public initialize(): void {
    dbConnect();
    const app: Express = express();
    const server: chaServer = new chaServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
