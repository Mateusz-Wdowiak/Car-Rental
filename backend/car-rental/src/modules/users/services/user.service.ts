import { User } from '../models/user.model';

export interface UserService {
  findUserByName(username: string): Promise<User | undefined>;
}
