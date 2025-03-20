import { Car } from '../models/car.model';
import { CreateCar } from '../models/create-car.model';
import { UpdateCar } from '../models/update-car.model';

export interface CarRepository {
  getCar(id: string): Promise<Car>;

  getCarList(): Promise<Car[]>;

  createCar(car: CreateCar): Promise<Car>;

  updateCar(car: UpdateCar): Promise<Car>;

  deleteCar(id: string): Promise<void>;
}
