import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TodosModule,
    MongooseModule.forRoot(
      'mongodb+srv://khangaikhuu_teacher:4dgZigRuS7evf3WG@mern-black.kosj6y7.mongodb.net/test',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
