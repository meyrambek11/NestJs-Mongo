import { Injectable, NotFoundException } from '@nestjs/common';
import { IStudent } from './students.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto, UpdateStudentDto } from './students.dto';

@Injectable()
export class StudentService {
  constructor(@InjectModel('Student') private studentModel: Model<IStudent>) {}

  async create(body: CreateStudentDto): Promise<IStudent> {
    return await this.studentModel.create(body);
  }

  async updateStudent(id: string, body: UpdateStudentDto): Promise<IStudent> {
    const student = await this.studentModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!student) {
      throw new NotFoundException(`Student #${id} not found`);
    }

    return student;
  }

  async getAll(): Promise<IStudent[]> {
    return await this.studentModel.find();
  }

  async getOne(id: string): Promise<IStudent> {
    return await this.studentModel.findById(id).exec();
  }
}
