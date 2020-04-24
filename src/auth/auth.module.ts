import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from 'src/users/users.module';
// import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [
    UserModule,
    UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, AuthResolver],
  exports: [AuthService],
  // controllers: [AuthController],
})
export class AuthModule {}
