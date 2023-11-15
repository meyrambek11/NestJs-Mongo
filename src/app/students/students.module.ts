import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './students.schema';
import { StudentController } from './students.controller';
import { StudentService } from './students.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Student',
        schema: StudentSchema,
      },
    ]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentsModule {}
