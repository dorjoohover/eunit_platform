import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UsersService } from 'src/app/users/users.service';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './auth.dto';
import { generateShortNumericHash } from 'src/common/utils/password.util';
@Injectable()
export class AuthService {
  private refreshTokens = new Map<string, string>(); // In-memory store
  private subs = new Map<string, string>(); // In-memory store

  constructor(
    private jwtService: JwtService,
    private service: UsersService,
  ) {}
  async validator(payload: any) {
    const user = await this.service.findByUsername(payload.username);
    const match = await bcrypt.compare(payload.password, user.password);
    if (!match) return null;
    return user;
  }
  async login(user: LoginUserDto) {
    const u = await this.validator(user);
    if (u == null)
      throw new HttpException(
        'Нууц үг эсвэл нэвтрэх нэр буруу байна.',
        HttpStatus.UNAUTHORIZED,
      );
    const id = u._id.toString();
    const sub = generateShortNumericHash(id);
    const payload = {
      sub: sub,
      username: user.username,
      role: u.role,
      id,
    };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '1d',
      secret: jwtConstants.secret,
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '7d',
      secret: jwtConstants.secret,
    });

    this.refreshTokens.set(payload.sub, refreshToken);
    this.subs.set(payload.sub, id);

    return { accessToken, refreshToken, sub: payload.sub };
  }

  async refreshToken(sub: string, token: string) {
    const storedToken = this.refreshTokens.get(sub);
    const id = this.subs.get(sub);
    if (storedToken !== token) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    try {
      const payload = this.jwtService.verify(token, {
        secret: jwtConstants.secret,
      });
      const newAccessToken = this.jwtService.sign(
        {
          sub: payload.sub,
          username: payload.username,
          role: payload.role,
          id: id,
        },
        { expiresIn: '1d', secret: jwtConstants.secret },
      );

      return { accessToken: newAccessToken };
    } catch (err) {
      throw new UnauthorizedException('Refresh token expired');
    }
  }
}
