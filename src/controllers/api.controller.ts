import { Request, Response } from "express";

export default class apiController {

  async update(req: Request, res: Response) {
    const { request } = req.body;
    let [data, signature] = request.split('.');

    try {
      //const runner = await RunController.fetchValidatedRunner(runScore.name, data, signature);
      console.log( 'Signature verification failed');
      return res.status(200).json({totalDistanceRun: -1});

    } catch (err) {
      res.status(500).send({
        message: `Error updating runner score ${err}`,
      });
    }
  }

  async getUsers(req: Request, res: Response) {
    const { request } = req.body;
    const [data, signature] = request.split('.');

    try {
      //const runner = await RunController.fetchValidatedRunner(runStat.name, data, signature);
      res.status(200).send({ranking: -1});
      res.status(404).send({
        message: `Cannot find validated runner with name=${xxx}.`,
      });
    } catch (err) {
      res.status(500).send({
        message: `Error retrieving stat. Error: ${err}`,
      });
    }
  }
}
