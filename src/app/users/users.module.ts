import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LogService } from 'src/base/log/log.service';
import {
  LogConst,
  ServiceConst,
  UserConst,
} from 'src/common/const/schema.const';
import { ServiceModule } from '../service/service.module';

@Module({
  imports: [MongooseModule.forFeature([UserConst, LogConst, ServiceConst])],
  controllers: [UsersController],
  providers: [UsersService, LogService],
  exports: [UsersService],
})
export class UsersModule {}
