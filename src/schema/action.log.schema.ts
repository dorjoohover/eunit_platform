import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Log {
  @Prop({ required: true })
  action: string; // e.g. "create_request", "login"

  @Prop()
  userId?: string;

  @Prop()
  role?: number;

  @Prop({ type: 'mixed' })
  meta?: any;
}

export const LogSchema = SchemaFactory.createForClass(Log);
export type LogDocument = HydratedDocument<Log>;
