import { Inject, Injectable } from '@nestjs/common';
import { Db, ObjectId } from 'mongodb';
import { Car } from './car.model';

@Injectable()
export class CarService {
  constructor(@Inject('DATABASE_CONNECTION') private db: Db) {}

  async create(car: Car): Promise<Car> {
    const result = await this.db.collection('car').insertOne(car);
    return { _id: result.insertedId, ...car };
  }

  async findById(id: string): Promise<Car | null> {
    const car = await this.db
      .collection('car')
      .findOne({ _id: new ObjectId(id) });

    if (car) {
      return {
        _id: car._id,
        make: car.make,
        model: car.model,
        year: car.year,
      };
    }

    return null;
  }
}
