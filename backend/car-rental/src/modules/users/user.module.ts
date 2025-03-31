import { Module } from '@nestjs/common';
import { UserServiceImplementation } from './services/user.service.implementation';

@Module({
  controllers: [],
  providers: [UserServiceImplementation],
  exports: [UserServiceImplementation],
})
export class UserModule {}
