import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderMonthAvailailityService from '@modules/appointments/services/ListProviderMonthAvailailityService';

export default class ProviderMonthAvailabilityController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { provider_id } = req.params;
    const { month, year } = req.body;

    const listProviderMonthAvailability = container.resolve(
      ListProviderMonthAvailailityService,
    );

    const availability = await listProviderMonthAvailability.execute({
      provider_id,
      month,
      year,
    });

    return res.json(availability);
  }
}
