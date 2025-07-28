import { Module } from '@nestjs/common';
import { UsageService } from './usage.service';
import { UsageController } from './usage.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  LogConst,
  ServiceConst,
  UsageConst,
  UserConst,
} from 'src/common/const/schema.const';
import { ServiceModule } from '../service/service.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [MongooseModule.forFeature([UsageConst, LogConst]), ServiceModule],
  controllers: [UsageController],
  providers: [UsageService],
  exports: [UsageService],
})
export class UsageModule {}
