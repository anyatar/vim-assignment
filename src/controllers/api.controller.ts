import { Request, Response } from "express";
import providerService from "../services/provider.service";

export default class apiController {

  setup(req: Request, res: Response) {

    try {
      const { name, date } = req.body;
  
      if (!name || !date || isNaN(parseInt(date))) {
        return res.status(400).json({ error: 'Bad request' });
      }
  
      providerService.setup(name, +date);
      return res.status(200);

    } catch (error) {
      console.error('Error:', error);
      res.status(400);
    }
  }

  getAppointments(req: Request, res: Response) {
    try {
      const { specialty, date, minScore } = req.query;

      if (!specialty || !date || !minScore) {
        return res.status(400).json({ error: 'Bad request' });
      }

      const providerNames: string[] = providerService.getAppointments(specialty, date, minScore);
      res.status(200).json(providerNames);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
