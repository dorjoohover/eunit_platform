import { Module } from '@nestjs/common';
import { BaseController } from './base.controller';
import { BaseService } from './base.service';
import { AppLogger } from './logger';
import { LogModule } from './log/log.module';

@Module({
  providers: [BaseService, BaseController, AppLogger],
  exports: [BaseService, BaseController, AppLogger],
  imports: [LogModule],
})
export class BaseModule {}
