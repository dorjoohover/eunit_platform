import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}

export class RegisterUserDto {
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  firstname: string;
  @ApiProperty()
  lastname: string;
}

export class Token {
  @ApiProperty()
  refreshToken: string;
  @ApiProperty()
  sub: string;
}
