import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppontimentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepositoriy from '@modules/users/repositories/IUsersRepositoriy';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppontimentsRepository',
  AppontimentsRepository,
);

container.registerSingleton<IUsersRepositoriy>(
  'UsersRepository',
  UsersRepository,
);
