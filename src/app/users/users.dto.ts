import { ApiProperty } from '@nestjs/swagger';

export class UsersDto {
  _id?: string;
  @ApiProperty()
  role: number;
  @ApiProperty()
  name: string;
}
