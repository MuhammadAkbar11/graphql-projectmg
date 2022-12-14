import { Application, Request, Response } from "express";

function appRoutes(app: Application) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    return res.sendStatus(200);
  });
}

export default appRoutes;
