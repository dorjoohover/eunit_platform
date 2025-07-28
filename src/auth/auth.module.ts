import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from 'src/app/users/users.service';
import { LogService } from 'src/base/log/log.service';
import { LogConst, UserConst } from 'src/common/const/schema.const';
import { UsersModule } from 'src/app/users/users.module';
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
    MongooseModule.forFeature([LogConst, UserConst]),
    UsersModule
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    ConfigService,
    LogService,
    JwtStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
