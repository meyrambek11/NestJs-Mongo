import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './students.service';
import { CreateStudentDto, UpdateStudentDto } from './students.dto';
import { IStudent } from './students.interface';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Post()
  create(@Body() body: CreateStudentDto): Promise<IStudent> {
    return this.studentService.create(body);
  }

  @Get()
  getAll(): Promise<IStudent[]> {
    return this.studentService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string): Promise<IStudent> {
    return this.studentService.getOne(id);
  }

  @Put('/:id')
  update(
    @Body() body: UpdateStudentDto,
    @Param('id') id: string,
  ): Promise<IStudent> {
    return this.studentService.updateStudent(id, body);
  }
}
