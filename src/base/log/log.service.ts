import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log, LogDocument } from 'src/schema/action.log.schema';

@Injectable()
export class LogService {
  constructor(
    @InjectModel(Log.name) private readonly model: Model<LogDocument>,
  ) {}

  async log(action: string, id: string, role: number, meta?: any) {
    await this.model.create({
      action,
      userId: id,
      role,
      meta,
    });
  }
}
