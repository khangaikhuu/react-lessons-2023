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

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const todo = await this.todoModel.findOneAndUpdate(
      { _id: id },
      updateTodoDto,
    );
    return todo;
  }

  async remove(id: string): Promise<Todo> {
    const result = await this.todoModel.findByIdAndDelete(id);
    return result;
  }
}
