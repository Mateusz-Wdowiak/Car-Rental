import { Car } from '../models/car.model';
import { Collection, Db, MongoClient, ObjectId } from 'mongodb';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CarMapperImplementation } from './car.mapper.implementation';
import { CarEntity } from '../entity/car.entity';
import { CreateCar } from '../models/create-car.model';
import { UpdateCar } from '../models/update-car.model';
import { CarRepository } from './car.repository';

@Injectable()
export class CarRepositoryImplementation implements CarRepository {
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

  async createCar(car: CreateCar): Promise<Car> {
    const carEntity = this.carMapper.mapCreateCarToCarEntity(car);
    const result = await this.collection.insertOne({
      carEntity,
    });

    if (!result.acknowledged) {
      throw new InternalServerErrorException('Failed to create car');
    }

    const createdCarEntity = await this.collection.findOne<CarEntity>({
      _id: result.insertedId,
    });

    if (!createdCarEntity) {
      throw new NotFoundException('Cars not found');
    }

    return this.carMapper.mapCarEntityToCar(createdCarEntity);
  }

  async updateCar(id: string, car: UpdateCar): Promise<Car> {
    const carEntity = this.carMapper.mapUpdateCarToCarEntity(car);
    const updatedCar = await this.collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { carEntity: carEntity } }
    );

    if (updatedCar.modifiedCount === 0) {
      throw new InternalServerErrorException('Failed to update car');
    }

    const updatedCarEntity = await this.collection.findOne<CarEntity>({
      _id: new ObjectId(id),
    });

    return this.carMapper.mapCarEntityToCar(updatedCarEntity);
  }

  async deleteCar(id: string): Promise<Boolean> {
    const result = await this.collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }

    return true;
  }
}
