import { Car } from '../models/car.model';
import { Db, MongoClient } from 'mongodb';
import { Inject } from '@nestjs/common';

export class CarRepositoryImplementation {
  private db: Db;

  constructor(
    @Inject('MONGO_CLIENT') private readonly mongoClient: MongoClient
  ) {
    this.db = this.mongoClient.db('car-rental');
  }

  constructor(private readonly carMapper: CarMapperImplementation) {}

  async getCar(id: string): Promise<Car> {}

  async getCarList(): Promise<Car[]> {
    return this.db.collection('cars').find().toArray();
  }

  async createCar(car: Car): Promise<Car> {}

  async updateCar(car: Car): Promise<Car> {}

  async deleteCar(id: string): Promise<void> {}
}
