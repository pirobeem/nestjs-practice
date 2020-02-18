import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CatsModule } from '../cats/cats.module';

@Module({
  imports: [forwardRef(() => CatsModule)],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
