import { Request, Response } from 'express';

export const GetHome = (req: Request, res: Response) => {
  res.render('home/index');
}
