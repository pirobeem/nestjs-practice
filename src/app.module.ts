import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [UserModule, CatsModule],
  controllers: [AppController],
  providers: [AppService, UserService, CatsService],
})
export class AppModule {}
