import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgoutPasswordEmailService from '@modules/users/services/SendForgoutPasswordEmailService';

export default class ForgotPasswordController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const sendForgotPasswordEmail = container.resolve(
      SendForgoutPasswordEmailService,
    );

    await sendForgotPasswordEmail.execute({
      email,
    });

    return res.status(204).json();
  }
}
