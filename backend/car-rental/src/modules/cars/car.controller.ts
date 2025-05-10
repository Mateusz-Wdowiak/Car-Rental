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
  async getCar(@Param('id') id: string): Promise<CarDto> {
    return this.carDtoMapper.mapCarToCarDto(await this.carService.getCar(id));
  }

  @Get('/list')
  async getCarList(): Promise<CarDto[]> {
    return this.carDtoMapper.mapCarsToCarsDto(
      await this.carService.getCarList()
    );
  }

  @Post('')
  async createCar(@Body() createCarDto: CreateCarDto): Promise<CarDto> {
    const createCar: CreateCar =
      this.carDtoMapper.mapCreateCarDtoToCreateCar(createCarDto);
    return this.carDtoMapper.mapCarToCarDto(
      await this.carService.createCar(createCar)
    );
  }

  @Put('')
  async updateCar(
    @Param('id') id: string,
    @Body() updateCarDto: UpdateCarDto
  ): Promise<CarDto> {
    const updateCar: UpdateCar =
      this.carDtoMapper.mapUpdateCarDtoToUpdateCar(updateCarDto);
    return this.carDtoMapper.mapCarToCarDto(
      await this.carService.updateCar(id, updateCar)
    );
  }

  @Delete('::id')
  async deleteCar(@Param('id') id: string): Promise<Boolean> {
    return this.carService.deleteCar(id);
  }
}
