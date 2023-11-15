import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './app/students/students.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: process.env.MONGO_DB_NAME,
    }),
    StudentsModule,
  ],
})
export class AppModule {}
