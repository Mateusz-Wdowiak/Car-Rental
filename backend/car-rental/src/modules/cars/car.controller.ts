import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { CarDto } from './dto/car.dto';
import { CreateCar } from './models/create-car.model';
import { UpdateCarDto } from './dto/update-car.dto';
import { UpdateCar } from './models/update-car.model';
import { CarDtoMapperImplementation } from './dto/car-dto.mapper.implementation';
import { CarServiceImplementation } from './services/car.service.implementation';

@Controller('car')
export class CarController {
  constructor(
    private readonly carService: CarServiceImplementation,
    private readonly carDtoMapper: CarDtoMapperImplementation
  ) {}

  @Get('::id')
  getCar(@Param('id') id: string): CarDto {
    return this.carDtoMapper.mapCarToCarDto(this.carService.getCar(id));
  }

  @Get('/list')
  getCarList(): CarDto[] {
    return this.carDtoMapper.mapCarsToCarsDto(this.carService.getCarList());
  }

  @Post('')
  createCar(@Body() createCarDto: CreateCarDto): CarDto {
    const createCar: CreateCar =
      this.carDtoMapper.mapCreateCarDtoToCreateCar(createCarDto);
    return this.carDtoMapper.mapCarToCarDto(
      this.carService.createCar(createCar)
    );
  }

  @Put('')
  updateCar(
    @Param('id') id: string,
    @Body() updateCarDto: UpdateCarDto
  ): CarDto {
    const updateCar: UpdateCar =
      this.carDtoMapper.mapUpdateCarDtoToUpdateCar(updateCarDto);
    return this.carDtoMapper.mapCarToCarDto(
      this.carService.updateCar(id, updateCar)
    );
  }

  @Delete('::id')
  deleteCar(@Param('id') id: string): void {
    return this.carService.deleteCar(id);
  }
}
