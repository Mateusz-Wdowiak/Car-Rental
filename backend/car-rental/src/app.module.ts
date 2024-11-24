import { Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { AppController } from './app.controller';
import { CarController } from './test/car.controller';
import { AppService } from './app.service';
import { BlogController } from './modules/blogs/blog.controller';

@Module({
  imports: [],
  controllers: [AppController, CarController, BlogController],
  providers: [
    AppService,
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async () => {
        const client = new MongoClient(process.env.DATABASE_URL);
        try {
          await client.connect();
          return client.db('car-rental');
        } catch (error) {
          console.error('Error connecting to MongoDB:', error);
          throw error;
        }
      },
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class AppModule {}
