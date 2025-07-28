import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Service {
  _id?: string;
  @Prop({ type: String })
  name: string;
  @Prop({ type: Number })
  price: number;
  @Prop({ type: Number, required: true })
  type: number;
  @Prop({ type: Types.ObjectId, ref: 'Users' })
  user: string;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
export type ServiceDocument = HydratedDocument<Service>;
