import { CarService } from './car.service';
import { Car } from '../models/car.model';
import { CarRepositoryImplementation } from './car.repository.implementation';

export class CarServiceImplementation implements CarService {
  constructor(private readonly carRepository: CarRepositoryImplementation) {}

  async getCar(id: string): Promise<Car> {
    return this.carRepository.getCar(id);
  }

  async getCarList(): Promise<Car[]> {
    return this.carRepository.getCarList();
  }

  async createCar(car: Car): Promise<Car> {
    this.carRepository.createCar(car);
  }

  async updateCar(car: Car): Promise<Car> {
    this.carRepository.updateCar(car);
  }

  async deleteCar(id: string): Promise<void> {
    this.carRepository.deleteCar(id);
  }
}
