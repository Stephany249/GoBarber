import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepositoriy';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  email: string;
}

// @injectable()
// class SendForgoutPasswordEmailService {
//   constructor(
//     @inject('UsersRepository')
//     private usersRepository: IUsersRepository,
//   ) {}

//   public async execute({ email }: IRequest): Promise<User> {
//     const checkUserExists = await this.usersRepository.findByEmail(email);

//     if (checkUserExists) {
//       throw new AppError('Email address already used.');
//     }

//     const user = await this.usersRepository.create({
//       email,
//     });

//     return user;
//   }
// }

// export default SendForgoutPasswordEmailService;
