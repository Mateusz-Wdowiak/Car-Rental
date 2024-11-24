import { Body, Controller, Get, Inject, Logger, Post } from '@nestjs/common';
import { Db, ObjectId } from 'mongodb';
import { Car } from './car.model';

@Controller('car')
export class CarController {
  private readonly logger = new Logger(CarController.name);

  constructor(@Inject('DATABASE_CONNECTION') private db: Db) {}

  @Get('/list')
  async getAllCars() {
    return await this.db.collection('car').find().toArray();
  }

  @Post()
  async createCar(@Body() car: Car) {
    if (!car) {
      console.log('Chuj a nie samochód');
    }
    car._id = new ObjectId();
    return await this.db.collection('car').insertOne(car);
  }
}
