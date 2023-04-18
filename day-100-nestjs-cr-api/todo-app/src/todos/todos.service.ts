import { BadRequestException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    if (createTodoDto.title === '') {
      throw new BadRequestException('Title is required');
    }

    const newTodo = new this.todoModel(createTodoDto);
    const result = await newTodo.save();
    return result;
  }

  async findAll(): Promise<Todo[]> {
    const result = await this.todoModel.find({});
    return result;
  }

  async findOne(id: string): Promise<Todo> {
    const result = await this.todoModel.findById(id);
    return result;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
