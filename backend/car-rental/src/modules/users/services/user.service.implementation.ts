import { Injectable } from '@nestjs/common';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable()
export class UserServiceImplementation implements UserService {
  constructor(private readonly userRepository: userRepository) {}

  async findUserByName(username: string): Promise<User | undefined> {
    return await this.userRepository.findUserByName(username);
  }
}
