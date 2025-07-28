import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { LoginUserDto, Token } from './auth.dto';
import { Public } from './guards/public.decorator';
@ApiBearerAuth('access-token')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Public()
  @Post('login')
  async login(@Body() body: LoginUserDto) {
    return this.authService.login(body);
  }

  @Post('refresh')
  async refresh(@Body() body: Token) {
    const { sub, refreshToken } = body;
    return this.authService.refreshToken(sub, refreshToken);
  }

  @Get()
  async a() {
    return 'asdf';
  }
}
