import { Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { AppController } from './app.controller';
import { CarController } from './modules/cars/car.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { BlogModule } from './modules/blogs/blog.module';
import { CarModule } from './modules/cars/car.module';

@Module({
  imports: [AuthModule, BlogModule, CarModule],
  controllers: [AppController, CarController, CarController],
  providers: [
    AppService,
    {
      provide: 'MONGO_CLIENT',
      useFactory: async () => {
        const client = new MongoClient(process.env.DATABASE_URL);
        try {
          await client.connect();
          console.log('Połączono z MongoDB');
          return client;
        } catch (error) {
          console.error('Error connecting to MongoDB:', error);
          throw error;
        }
      },
    },
  ],
  exports: ['MONGO_CLIENT'],
})
export class AppModule {}
