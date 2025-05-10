import { CarService } from './car.service';
import { Car } from '../models/car.model';
import { CarRepositoryImplementation } from './car.repository.implementation';
import { UpdateCar } from '../models/update-car.model';
import { CreateCar } from '../models/create-car.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CarServiceImplementation implements CarService {
  constructor(private readonly carRepository: CarRepositoryImplementation) {}

  async getCar(id: string): Promise<Car> {
    return this.carRepository.getCar(id);
  }

  async getCarList(): Promise<Car[]> {
    return this.carRepository.getCarList();
  }

  async createCar(car: CreateCar): Promise<Car> {
    return await this.carRepository.createCar(car);
  }

  async updateCar(id: string, car: UpdateCar): Promise<Car> {
    return await this.carRepository.updateCar(id, car);
  }

  async deleteCar(id: string): Promise<Boolean> {
    return await this.carRepository.deleteCar(id);
  }
}
