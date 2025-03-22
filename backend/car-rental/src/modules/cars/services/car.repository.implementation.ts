import { Car } from '../models/car.model';
import { Collection, Db, MongoClient, ObjectId } from 'mongodb';
import {
  Inject,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CarMapperImplementation } from './car.mapper.implementation';
import { CarEntity } from '../entity/car.entity';

export class CarRepositoryImplementation {
  private db: Db;
  private collection: Collection;

  constructor(
    @Inject('MONGO_CLIENT') private readonly mongoClient: MongoClient,
    private readonly carMapper: CarMapperImplementation
  ) {
    this.db = this.mongoClient.db('car-rental');
    this.collection = this.db.collection('car');
  }

  async getCar(id: string): Promise<Car> {
    const carEntity = await this.collection.findOne<CarEntity>({
      _id: new ObjectId(id),
    });

    if (!carEntity) {
      throw new NotFoundException('Car not found');
    }

    return this.carMapper.mapCarEntityToCar(carEntity);
  }

  async getCarList(): Promise<Car[]> {
    const carEntityList = await this.collection.find<CarEntity>({}).toArray();

    if (!carEntityList) {
      throw new NotFoundException('Cars not found');
    }

    return this.carMapper.mapCarsEntityToCars(carEntityList);
  }

  async createCar(car: Car): Promise<Car> {
    const carEntity = this.carMapper.mapCarToCarEntity(car);
    const result = await this.collection.insertOne({
      carEntity,
    });

    if (!result.acknowledged) {
      throw new InternalServerErrorException('Failed to create car');
    }

    const createdCarEntity = await this.collection.findOne<CarEntity>({ _id: result.insertedId });

    if (!createdCarEntity) {
      throw new NotFoundException('Cars not found');
    }

    return this.carMapper.mapCarEntityToCar(createdCarEntity);
  }

  async updateCar(car: Car): Promise<Car> {
    const carEntity = this.carMapper.mapCarToCarEntity(car);
    const updatedCar = this.collection.
  }

  async deleteCar(id: string): Promise<Boolean> {
    const result = await this.collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }

    return true;
  }
}
