import { ApiProperty } from '@nestjs/swagger';

export class ServiceDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  type: number;
  @ApiProperty()
  user: string;
}
