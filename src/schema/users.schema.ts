import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from 'src/auth/guards/role/role.enum';

@Schema({
  timestamps: true,
})
export class User {
  // hereglegch iin token
  @Prop({ type: String })
  token: string;

  @Prop({ type: String })
  username: string;
  @Prop({ type: String })
  password: string;
  @Prop({ type: Number, enum: Role })
  role: number;
  @Prop()
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = HydratedDocument<User>;
