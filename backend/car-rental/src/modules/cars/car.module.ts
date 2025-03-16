import { CarController } from './car.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [CarController],
  providers: [],
})
export class CarModule {}
