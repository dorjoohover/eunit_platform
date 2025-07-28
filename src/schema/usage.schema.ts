import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Usage {
  _id?: string;
  @Prop({ type: mongoose.Types.ObjectId, required: true, ref: 'Users' })
  user: string;
  @Prop({ type: Object, required: true })
  value: Record<string, any>;
  @Prop({ type: mongoose.Types.ObjectId, required: true, ref: 'Services' })
  service: string;
  @Prop({ type: Number, default: 1 })
  quantity: number;
  @Prop({ type: Number, required: true })
  amount: number;
  @Prop({ type: Number, required: true })
  estimatedPrice: number;
}

export const UsageSchema = SchemaFactory.createForClass(Usage);
export type UsageDocument = HydratedDocument<Usage>;
