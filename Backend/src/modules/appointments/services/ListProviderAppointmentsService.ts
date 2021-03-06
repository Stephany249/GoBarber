import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { classToClass } from 'class-transformer';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
import Appontment from '../infra/typeorm/entities/Appointment';

interface IRequest {
  provider_id: string;
  day: number;
  month: number;
  year: number;
}

@injectable()
class ListProviderAppointmentsService {
  constructor(
    @inject('AppontimentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    provider_id,
    year,
    month,
    day,
  }: IRequest): Promise<Appontment[]> {
    const cacheKey = `provider-appointments:${provider_id}:${year}-${month}-${day}`;

    let appointments = await this.cacheProvider.recover<Appontment[]>(cacheKey);

    // let appointments;
    if (!appointments) {
      appointments = await this.appointmentsRepository.findAllInDayFromProvider(
        {
          provider_id,
          year,
          month,
          day,
        },
      );
    }

    await this.cacheProvider.save(cacheKey, classToClass(appointments));

    return appointments;
  }
}

export default ListProviderAppointmentsService;
